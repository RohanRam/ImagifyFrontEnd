import React, {useContext} from 'react'
import { assets } from './../assets/assets';
import { delay, motion } from "framer-motion"
import { AppContext } from './../context/AppContext';
import { useNavigate } from 'react-router-dom';




const Header = () => {

    const {user,setShowLogin}=useContext(AppContext)
    const navigate = useNavigate()
    
    const onClickHandler = () => {
        if (user)
        {
            navigate('/result')
        }
        else
        {
            setShowLogin(true)
        }
    }
    return (
        <>

            <motion.div
                initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>

                <div className='d-flex justify-content-center align-items-center mt-5'>


                    <motion.div
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{delay: 1.2, duration: 1 }}
                     className='gen mb-5'>
                        <span style={{ color: 'grey' }} className='me-2'>Best text to Image generator!</span>
                        <img src={assets.star_icon} alt="" />
                    </motion.div>


                </div>

                <motion.div 
                initial={{ opacity: 0}} 
                animate={{ opacity: 1, }}
                transition={{delay: 1.4, duration: 1 }}
                className='header-text text-center mt-3'>
                    <h1  >turn text into </h1>
                    <h1 > <span className='text-primary'>images</span>, in seconds.</h1>

                </motion.div>

                <motion.div
                initial={{ opacity: 0 , y:20}} 
                animate={{ opacity: 1, }}
                transition={{delay: 1.6, duration: 1 }}
                className='d-flex align-items-center justify-content-center mt-1'>
                    <p style={{ width: '60%', color: 'grey' }} className=' text-center ps-5 pe-5 para mt-4'>
                        "Transform your ideas into stunning visuals with just a few words.
                        Generate unique, high-quality images based on detailed text prompts and bring your creativity to life."
                    </p>
                </motion.div>

                <motion.div
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{default: {duration: 0.5},opacity: { delay:1.8,duration:1 } }}
                onClick={onClickHandler}
                className='d-flex justify-content-center mt-4'>

                    <button style={{ letterSpacing: '0.1rem', backgroundColor: 'black' }} className='btn btn-dark rounded-5 pe-4 ps-4 me-2 d-flex align-items-center'>
                        Generate Image
                        <img width={'20px'} className='ms-2' src={assets.star_group} alt="" />
                    </button>

                </motion.div>

                <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{delay: 1.2, duration: 1.6 }}
                
                className='mt-5 gen-img2 '>
                    {/* {Array(6).fill('').map((item,index)=>(
                        <img className='rounded hover' src={assets.sample_img_1} alt="" key={index} width={70} />
                    ))} */}
                    <img className='rounded hover' src={assets.sample_img_8} width={70} />
                    <img className='rounded hover' src={assets.sample_img_1} width={70} />
                    <img className='rounded hover' src={assets.sample_img_7} width={70} />
                    <img className='rounded hover' src={assets.sample_img_6} width={70} />
                    <img className='rounded hover' src={assets.sample_img_4} width={70} />
                    <img className='rounded hover' src={assets.sample_img_5} width={70} />

                    

                </motion.div>

                {/* <div className='gen-img'>
                <img className='rounded hover' src={assets.sample_img_8} width={70} />
                    <img className='rounded hover' src={assets.sample_img_1} width={70} />
                    <img className='rounded hover' src={assets.sample_img_7} width={70} />
                    <img className='rounded hover' src={assets.sample_img_6} width={70} />
                    <img className='rounded hover' src={assets.sample_img_4} width={70} />
                    <img className='rounded hover' src={assets.sample_img_5} width={70} />
                </div> */}
                <motion.p 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }}
                 transition={{delay: 1.6, duration: 1 }}
                style={{ fontSize: '13px', color: 'grey' }} className='text-center mt-2 mb-5'>Generated images from imagify</motion.p>



            </motion.div>

        </>
    )
}

export default Header
