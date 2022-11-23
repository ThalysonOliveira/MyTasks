import { ButtonsSections, Container, Form, SignOut, Task } from './styles';
import { signOut } from 'firebase/auth';
import {
  authentication,
  fireStorageDatabase
} from '../../firebase/configurations';
import { BiLogOut } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { toast } from 'react-toastify';

interface User {
  uid: string;
  email: string;
}

interface Task {
  id: string;
  task: string;
  userUid: string;
}

const Dashboard: React.FC = () => {
  const [inputTask, setInputTask] = useState<string>();
  const [user, setUser] = useState<User>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [edit, setEdit] = useState<Task | any>({});

  useEffect(() => {
    const userStorage = localStorage.getItem('user');

    setUser(JSON.parse(userStorage as string));

    if (userStorage) {
      const data = JSON.parse(userStorage);

      const myTask = collection(fireStorageDatabase, 'tasks');
      const queryFire = query(
        myTask,
        orderBy('created', 'desc'),
        where('userUid', '==', data?.uid)
      );

      onSnapshot(queryFire, snapshot => {
        const list: Task[] = [];

        snapshot.forEach(doc => {
          list.push({
            id: doc.id,
            task: doc.data().task,
            userUid: doc.data().userUid
          });
        });

        setTasks(list);
      });
    }
  }, []);

  const doneTask = async (taskId: string) => {
    const doneTask = doc(fireStorageDatabase, 'tasks', taskId);
    await deleteDoc(doneTask);
  };

  const editTask = async (task: Task) => {
    setInputTask(task.task);
    setEdit(task);
  };

  const updateTask = async () => {
    const docRef = doc(fireStorageDatabase, 'tasks', edit?.id);
    await updateDoc(docRef, {
      task: inputTask
    })
      .then(() => {
        setInputTask('');
        setEdit({});
        toast.success('Tarefa atualiza com sucesso!');
      })
      .catch(error => {
        console.log(error);
        setInputTask('');
        setEdit({});
        toast.error('Erro ao atualizar a tarefa');
      });
  };

  const handleSignOut = async (): Promise<void> => {
    await signOut(authentication);
  };

  const addTask = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!inputTask) return toast.warn('Digite uma tarefa...');

    if (edit?.id) {
      return await updateTask();
    }

    await addDoc(collection(fireStorageDatabase, 'tasks'), {
      task: inputTask,
      created: new Date(),
      userUid: user?.uid
    })
      .then(() => {
        setInputTask('');
        toast.success('Tarefa registrada com sucesso!');
      })
      .catch(error => {
        console.log(error);
        setInputTask('');
        toast.error('Erro ao registar tarefa!');
      });
  };
  return (
    <Container>
      <SignOut onClick={handleSignOut}>
        <BiLogOut size={30} />
      </SignOut>

      <h1>Minhas Tarefas</h1>
      <Form>
        <input
          type='text'
          name='myTasks'
          placeholder='Digite aqui a sua tarefa...'
          value={inputTask}
          onChange={event => setInputTask(event.target.value)}
        />
        {Object.keys(edit).keys.length > 0 ? (
          <button type='submit' onClick={addTask}>
            Atualizar tarefa
          </button>
        ) : (
          <button type='submit' onClick={addTask}>
            Registrar tarefa
          </button>
        )}
      </Form>

      <Task>
        {tasks.map((task: Task) => {
          return (
            <article key={task.id}>
              <p>{task.task}</p>
              <ButtonsSections>
                <button onClick={() => editTask(task)}>Editar</button>
                <button onClick={() => doneTask(task.id)}>Finalizar</button>
              </ButtonsSections>
            </article>
          );
        })}
      </Task>
    </Container>
  );
};

export default Dashboard;
