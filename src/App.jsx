import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelIdPage from './pages/HotelIdPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import GeneralHeader from './components/shared/GeneralHeader'
import ReservetionPage from './pages/ReservetionPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
      <div>
        <GeneralHeader />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotel/:id' element={<HotelIdPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/reservation' element={<ReservetionPage />}/>
        </Route>
       </Routes>
      </div>
  )
}

export default App
