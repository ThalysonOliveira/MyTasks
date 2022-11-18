import { Container, Title } from './styles';
import SignUpComponent from '../../components/SignUp';

const Register: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta</span>
      </Title>

      <SignUpComponent />
    </Container>
  );
};

export default Register;
