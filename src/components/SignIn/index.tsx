import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authentication } from '../../firebase/configurations';
import { Form, LinkStyle } from './styles';
import { useNavigate } from 'react-router-dom';

const SignInComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const signIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!email || !password)
      return toast.warn('Todos os campos devem ser preenchidos!');

    await signInWithEmailAndPassword(authentication, email, password)
      .then(() => navigate('/dashboard', { replace: true }))
      .catch(error => {
        console.log(error);
        toast.error('Erro ao fazer login');
      });
  };

  return (
    <>
      <Form>
        <input
          type='email'
          name='email'
          placeholder='Seu email aqui'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          type='password'
          name='password'
          placeholder='Sua senha aqui'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit' onClick={signIn}>
          Acessar
        </button>
        <LinkStyle to='/signup'>Não possuiu uma conta? Registre-se</LinkStyle>
      </Form>
    </>
  );
};

export default SignInComponent;
