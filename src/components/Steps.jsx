import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "framer-motion"


const Steps = () => {
    return (
        <>

            <motion.div
            initial={{opacity:0.2,y:100}}  
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='steps mt-5'>
                <h1>Let's get started</h1>
                <span style={{color:'grey'}}>"Convert your words into breathtaking visuals with ease."</span>

                <br />


                <motion.div
                initial={{opacity:0.2,y:100}}  
                transition={{delay:0.2, duration:1}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                 className='mt-5' >
                {stepsData.map((item,index)=>(
                    <div className='steps-box mb-4 p-4 ' key={index}>
                        <img src={item.icon} alt="" />
                        <div className='step-desc ms-4'>
                            <h4 className='text-black'>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            </motion.div>

            

        </>
    )
}

export default Steps
