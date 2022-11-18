import { Container, Title } from './styles';
import SignInComponent from '../../components/SignIn';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Lista de tarefas</h1>
        <span>Gerencie a sua agenda de forma fácil.</span>
      </Title>

      <SignInComponent />
    </Container>
  );
};

export default Home;
