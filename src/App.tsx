import Index from 'views/Index';
import 'assets/css/main.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'views/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
