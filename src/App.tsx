import Index from 'views/Index';
import 'assets/css/main.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'views/NotFound';
import Signup from 'views/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />

      <Route path='/signup' element={<Signup />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
