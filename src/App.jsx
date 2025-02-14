import React, { useContext } from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import Profile from './pages/Profile'
import AdminDashboard from './pages/AdminDashboard';
import { Toaster, toast } from 'sonner'






const App = () => {

  const { showLogin } = useContext(AppContext)

  return (
    <div className='p-3 px-3 px-sm-5 px-md-7 px-lg-10 min-vh-100 bg'>
      <Navbar />
      <Toaster position="top-center" richColors />

      {showLogin && <Login />}

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />



      </Routes>
      <Footer />


    </div>
  )
}

export default App
