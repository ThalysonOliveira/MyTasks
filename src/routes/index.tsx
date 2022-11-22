import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Register from '../pages/Register';
import AuthenticationRoutes from './authentication';

const RoutesConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Register />} />
        <Route
          path='/dashboard'
          element={
            <AuthenticationRoutes>
              <Dashboard />
            </AuthenticationRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
