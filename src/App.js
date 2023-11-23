
import { useState } from 'react'
import './App.css'
import Authorisation from './components/Authorisation/authorisation'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
// import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

import Profil from './components/Profil/Profil'
import Task from './components/Task/Task'
import Favorite from './components/favorite/Favorite'
import Chat from './components/messenger/Chat'
import { Box } from '@mui/material'




function App() {

  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'task':
        return <Task />;
      case 'chat':
        return <Chat />;
      case 'favorite':
        return <Favorite />;
      case 'profil':
        return <Profil />;
      default:
        return null;
    }
  };


  return (
    <Box>
      <Authorisation />
      <Container>
       {renderPage()}
      </Container>
      <Footer onPageChange={handlePageChange} activePage={activePage}/>
    </Box>
  )
}

export default App
