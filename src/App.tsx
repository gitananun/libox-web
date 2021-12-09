import Index from 'views/Index';
import 'assets/css/main.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'views/NotFound';
import Signup from 'views/Signup';
import Signin from 'views/Signin';
import ForgotPassword from 'views/ForgotPassword';
import Course from 'views/Course';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />

      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />

      <Route path='/courses/*' element={<Course />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
