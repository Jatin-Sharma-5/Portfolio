import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './components/ProjectsSection/Resume/Resume';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
