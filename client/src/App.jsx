import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import Layout from './Pages/admin/Layout.jsx'
import Dashboard from './Pages/admin/Dashboard.jsx'
import AddBlog from './Pages/admin/AddBlog.jsx'
import ListBlog from './Pages/admin/ListBlog.jsx'
import Comments from './Pages/admin/Comments.jsx'
import Login from './Components/Admin/Login.jsx'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast';
import { useAppContext } from './context/AppContext.jsx'

const App = () => {

  const{token}=useAppContext()
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/admin' element={token ?<Layout/> :<Login/>} >
          <Route index element={<Dashboard/>}/>
          <Route path='addBlog' element={<AddBlog/>}/>
          <Route path='listBlog' element={<ListBlog/>}/>
          <Route path='comments' element={<Comments/>}/>      
      
        </Route>
                
      </Routes>
    </div>
  )
}

export default App