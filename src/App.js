import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'
import Information from './pages/Information'

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/dashboard'element = {<Dashboard/>}/>
                    <Route path='/user' element = {<User/>}/>
                    <Route path='/favorites' element = {<Favorites/>}/>
                    <Route path='/settings' element = {<Settings/>}/>
                    <Route path='/information' element = {<Information/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
