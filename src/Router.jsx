import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/firstform" element={<FirstForm />} />
      <Route path="/secondform" element={<SecondForm />} />
      <Route path="/thirdform" element={<ThirdForm />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
