import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'  
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'
import Header from './components/Header.jsx'
import FooterCom from './components/Footer.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
      <Route path='/project' element={<Project />}/>
      <Route path='/about' element={<About />}/>

    </Routes>
    <FooterCom />
    
    </BrowserRouter>
  )
}

export default App
