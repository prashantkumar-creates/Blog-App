import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'  
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route path='/Signin' element={<Signin />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      <Route path='/Project' element={<Project />}/>
      <Route path='/About' element={<About />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
