import { Route, Routes } from 'react-router';
import './App.css';
import React from 'react'

import Feed from './feed/feed';
import Footer from './footer/footer';
import Header from './header/header';
import NewList from './newList/newList';
import ListPage from './listPage/listPage';
import LoginPage from './loginPage/loginPage'
import RegisterPage from './registerPage/registerPage'

function App() {
  return (
    <div className="App">
      
       <Header />
      <main>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/newlist" element={<NewList />} />
       </Routes>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;

