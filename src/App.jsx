import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';

const App = () => {
  return ( 
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#000] sm:px-8 px-4 py-4 border-b border-b-[#353740]">
        <Link to="/">
        <h1 className='text-white font-inter font-medium text-2xl pl-3'>VisionCraft</h1>
        </Link>              
        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#202123] min-h-[calc(100vh-73px]'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App  