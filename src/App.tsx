import Index from 'views/Index';
import 'assets/css/main.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'views/NotFound';
import Signup from 'views/Signup';
import Signin from 'views/Signin';
import ForgotPassword from 'views/ForgotPassword';
import Course from 'views/Course';
import Courses from 'views/Courses';
import Dashboard from 'views/Dashboard';
import AdminDashboard from 'views/AdminDashboard';
import { isAuthenticated } from 'utils/shared';
import store from 'store/store';
import { useEffect } from 'react';
import { authSelf } from 'services/auth';
import { loginAction } from 'store/Auth/auth.actions';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const App = () => {
  const { dispatch } = store;
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    isAuthenticated() && authSelf().then((data) => dispatch(loginAction(data.body)));
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Index />} />

      {user ? (
        <>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/courses' element={<Courses dashboard={true} />} />
        </>
      ) : (
        <>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </>
      )}

      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/search/:title' element={<Courses />} />
      <Route path='/courses/:slug' element={<Course />} />

      <Route path='/admin/dashboard' element={<AdminDashboard />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
