import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.jsx';
import Github,{githubInfoLoader} from './components/Github/Github.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';

//1st way
// const router=([{
//   path:'/',
//   element:<Layout/>,
//   children:([{
//     path:'',
//     element:<Home/>
//   },
//   {path:'about',
//     element:<About/>
//   },
//   {
//     path:'contact',
//     element:<Contact/>
//   }
// ])
// }])

//2nd way
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>} />
      <Route path='user/:userId' element={<User/>}   />
        
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
