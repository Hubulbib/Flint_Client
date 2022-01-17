import React from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Productions from './pages/productions/Productions';
import Main from './pages/main/Main'
import Kotel from './pages/kotel/Kotel'
import Contacts from './pages/contacts/Contacts';
import About from './pages/about/About';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/productions' element={<Productions/>} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/productions/:prodId' element={<Kotel/>}/>
        <Route path='*' element={<Navigate to="/about" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
