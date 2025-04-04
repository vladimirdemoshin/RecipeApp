import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipePage from './pages/Recipe/RecipePage';
import AddRecipePage from './pages/AddRecipe/AddRecipePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/recipe/add" element={<AddRecipePage />} />
        </Routes>
      </div>
     </BrowserRouter>
  );
};

export default App;
