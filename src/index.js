import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// import Error from './components/Error/Error.jsx'
// import Home from './components/Home/Home.jsx'
// import Profil from './components/Profil/Profil.jsx'
// import Layout from './components/layout/Home/Home.jsx'
import Authorisation from './components/Authorisation/authorisation'
// import Chat from './components/messenger/Chat.jsx'
// import Favorite from './components/favorite/Favorite.jsx'
// import Task from './components/Task/Task.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/calendar',
//         element: <Task />
//       },
//       {
//         path: '/chat',
//         element: <Chat />
//       },
//       {
//         path: '/favorite',
//         element: <Favorite />
//       },
//       {
//         path: '/profil',
//         element: <Profil />
//       },

//     ]
//   },
//   {
//     path: '*',
//     element: <Error />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authorisation />
    <App />
  </React.StrictMode>,
)
