import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

import Collapse from 'react-bootstrap/Collapse';
import { AppContext } from '../context/AppContext';





const Navbar = () => {

  const { user, setShowLogin, logout, credit } = useContext(AppContext)

  console.log(user);
  

  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div className='d-flex align-items-center justify-content-between'>

      <Link to='/' ><img src={assets.logo} className='w-10 w-sm-50 w-lg-75' alt="" /></Link>
     
      <div >
        {
          user ?
            <div className='d-flex align-items-center ps-1 gap-3'>

              <button onClick={() => navigate('/buy')} style={{ backgroundColor: "#D9EAFD", borderRadius: '25px' }} className='btn d-flex nav-cbtn align-items-center me-2 '>
                <img className='w-5 nav-icn me-1' src={assets.credit_star} alt="" />
                <span className='nav-credit'>Credits : {credit}</span>
              </button>

              <span className='nav-user'>{user.name}</span>

              <div className='d-flex nav-imgd align-items-center gap-3' style={{ position: 'relative' }}>
                <img style={{ width: '40px', cursor: 'pointer' }} className='w-5 ' src={assets.profile_icon} alt="" onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open} />
                <div className='d-flex flex-column'>
                  <Collapse className='nav-cls' in={open} style={{
                    position: 'absolute',
                    top: '100%',
                    right: '10%',

                  }}>
                    <div id="example-collapse-text ">
                      <Link style={{ textDecoration: 'none' }} to={'/profile'}> <a className='nav-a'> Profile</a></Link>
                      <a onClick={logout} className='nav-a'> Logout</a>
                      {user.role == 'admin' && <Link style={{ textDecoration: 'none' }} to={'/admin/dashboard'}> <a className='nav-a'> Dashboard</a></Link>}
                    </div>
                    

                    
                  </Collapse>
                </div>
               
              </div>

            </div>
            :
            <div className='d-flex align-items-center gap-3'>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={() => navigate('/buy')}>Pricing</a>
              <button onClick={() => setShowLogin(true)} style={{ width: '100px', fontSize: '13px', borderRadius: '25px', backgroundColor: 'black' }} className='btn btn-dark ms-2 d-flex align-items-center justify-content-center'>Login</button>
            </div>
        }



      </div>


    </div>
  )
}

export default Navbar
