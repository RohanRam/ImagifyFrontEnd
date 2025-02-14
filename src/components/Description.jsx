import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"


const Description = () => {
  return (
    <>
      <br />

      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ delay:0.3, duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h1
          >Manifiest AI Images</h1>
          <p className='desc-sub'
            style={{ color: 'grey' }}>"Generate stunning images from your imagination."</p>
        </div>

        <div className='desc mt-5'>

          <img width={'45%'} className='rounded des-img' src={assets.sample_img_7} alt="" />
          <div className='p-5 d-flex flex-column align-items-center justify-content-center '>
            <h3 style={{ fontSize: '34px' }}>Turn words into masterpieces.</h3>
            <p className='al' style={{ opacity: '70%' }}>Unleash the power of your imagination and transform simple words into breathtaking artistic masterpieces.
              With advanced AI-powered creativity, your text descriptions become stunning visuals, capturing every detail and emotion.
              Whether it’s surreal landscapes or intricate designs, bring your ideas to life effortlessly, turning imagination into reality.</p>
            <p className='al' style={{ opacity: '70%' }}>
              Harness the full potential of your creativity and watch as words evolve into vibrant,
              high-quality images. Whether you're designing marketing visuals, conceptual artwork, or just exploring new ideas,
              this process turns your thoughts into tangible works of art.
              Experience the magic of transforming text into visually captivating creations in mere seconds.
            </p>
          </div>


        </div>
      </motion.div>


    </>
  )
}

export default Description
