import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>

    <div style={{paddingBottom:'0'}} className='d-flex foot justify-content-between align-items-center p-5 gap-4'> 
        <img className='foot-logo' src={assets.logo} alt=""  />
        {/* <div className='mylogo-div'>
          <img width={50} src={assets.mylogo} className='mylog' alt="" /><span className='ms-2'>photofy</span>
        </div> */}

        <span className='foot-text' style={{ color: 'grey',fontSize:'10px' }}>Copyright &copy;RohanRam | All rights reserved.</span>

        <div className='d-flex  gap-2'>
            <img className='foot-icon' src={assets.facebook_icon} alt=""  />
            <img className='foot-icon' src={assets.twitter_icon} alt=""  />
            <img className='foot-icon' src={assets.instagram_icon} alt=""  />

        </div>

    </div>
      
    </>
  )
}

export default Footer
