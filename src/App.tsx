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

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />

      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/courses' element={<Courses dashboard={true} />} />

      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />

      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:slug' element={<Course />} />

      <Route path='/admin/dashboard' element={<AdminDashboard />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
