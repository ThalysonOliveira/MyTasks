import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../firebase/configurations';
import { Navigate } from 'react-router-dom';

const AuthenticationRoutes = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect((): any => {
    const checkSignIn = async (): Promise<void> => {
      onAuthStateChanged(authentication, user => {
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email
          };

          localStorage.setItem('user', JSON.stringify(userData));

          setLoading(false);
          setSigned(true);
        } else {
          setLoading(false);
          setSigned(false);
        }
      });
    };

    checkSignIn();
  }, []);

  if (loading) return <div></div>;

  if (!signed) return <Navigate to='/' />;

  return children;
};

export default AuthenticationRoutes;
