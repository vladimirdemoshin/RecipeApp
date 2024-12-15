import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipePage from './pages/Recipe/RecipePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
     </BrowserRouter>
  );
};

export default App;
