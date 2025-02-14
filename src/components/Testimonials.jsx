import React, { useContext } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const Testimonials = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        }
        else {
            setShowLogin(true)
        }
    }
    return (
        <>

            <br />
            <br />

            <div
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Testimonials</h1>
                <p className='testi-sub' style={{ color: 'grey' }}>"What our users have to say"</p>
            </div>

            <div className='test mt-5'>

                {
                    testimonialsData.map((testimonial, index) => (
                        <div key={index} className='rounded test-card'>
                            <img width={'70px'} src={testimonial.image} className='rounded-circle mt-5' alt="" />
                            <h2 className='mt-3'>{testimonial.name}</h2>
                            <p className='trole' style={{ color: 'grey' }}>{testimonial.role}</p>
                            <div className='d-flex mb-4'>
                                {Array(testimonial.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))}

                            </div>
                            <p className='al test-para' >{testimonial.text}</p>

                        </div>
                    ))
                }

            </div>


            <motion.h1
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-center'>See the magic. Let's Begin!</motion.h1>
            <div className='d-flex justify-content-center mt-5'>

                <button onClick={onClickHandler} style={{ letterSpacing: '0.1rem', backgroundColor: 'black' }} className='btn btn-dark rounded-5 pe-4 ps-4 me-2 d-flex align-items-center'>
                    Generate Image
                    <img width={'20px'} className='ms-2' src={assets.star_group} alt="" />
                </button>

            </div>

        </>
    )
}

export default Testimonials
