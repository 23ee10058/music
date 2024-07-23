import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import songlist from './Pages/songlist'
import playlist from './Pages/playlist'
import library from './Pages/library'
import subscriptions from './Pages/subscriptions'
import music1 from './Pages/music1'
import music2 from './Pages/music2'
import music3 from './Pages/music3'
import music4 from './Pages/music4'
import music5 from './Pages/music5'
import trending1 from './Pages/trendig1'
import trending2 from './Pages/trending2'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {
  

  return (
    <div className='container'>
      <Header></Header>
      <Search></Search>

      <Routes>
        <Route path='' Component={Sidebar}></Route>
        <Route path='/Songlist' Component={songlist}></Route>
        <Route path='/Playlist' Component={songlist}></Route>
        <Route path='/Library' Component={library}></Route>
        <Route path='/Subscriptions' Component={subscriptions}></Route>
        <Route path='/song1' Component={music1}></Route>
        <Route path='/song2' Component={music2}></Route>
        <Route path='/song3' Component={music3}></Route>
        <Route path='/song4' Component={music4}></Route>
        <Route path='/song5' Component={music5}></Route>
        <Route path='/trending song1' Component={trending1}></Route>
        <Route path='/trending song2' Component={trending2}></Route>
      </Routes>
      
      

    </div>
  )
}

export default App
