import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';

import { Container, PrivateRoute, PublicRoute, MainLoader } from './';

const Dashboard = lazy(() => import('../pages/DashboardPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute path="/login">
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute path="/" restricted>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute path="/" restricted>
                <Register />
              </PublicRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
      <ToastContainer
        autoClose={2000}
        transition={Slide}
        pauseOnHover={false}
      />
    </Container>
  );
}

export default App;
