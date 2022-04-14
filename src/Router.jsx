import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Router = () => {
  const [saveFormData, setSaveFormData] = React.useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/firstform"
          element={<FirstForm saveFormData={saveFormData} setSaveFormData={setSaveFormData} />}
        />
        <Route
          path="/secondform"
          element={<SecondForm saveFormData={saveFormData} setSaveFormData={setSaveFormData} />}
        />
        <Route
          path="/thirdform"
          element={<ThirdForm saveFormData={saveFormData} setSaveFormData={setSaveFormData} />}
        />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
