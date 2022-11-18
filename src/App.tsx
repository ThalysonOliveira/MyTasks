import RoutesConfig from './routes';
import GLobalStyled from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GLobalStyled />
      <RoutesConfig />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
