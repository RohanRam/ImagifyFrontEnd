import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios';


const BuyCredit = () => {

  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext)

  const navigate = useNavigate()

  const initPay = async (order) => {

    const options = {
      key: import.meta.env.VITE_RAZOR_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verify-razor', response, { headers: { token } })
          if (data.success) {
            loadCreditsData();
            navigate('/')
            toast.success('Credits Added')
          }
        } catch (error) {
          toast.error(error.message)
        }

      }

    }
    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const paymentRazorpay = async (planId) => {

    try {

      if (!user) {
        setShowLogin(true)
      }

      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, { headers: { token } })

      if (data.success) {
        initPay(data.order)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }





  return (
    <>

      <br />
      <br />
      <div className='buy-cont mt-5 p-5'>
        <div>
          <h1 className='text-center'>Discover Our Exclusive Plans</h1>
          <p className='text-center' style={{ color: 'grey' }}>Choose the Perfect Plan for You</p>

        </div>

        <div className='buy-card mt-5 '>
          {plans.map((item, index) => (
            <div key={index} className='card-indi mb-3 rounded pt-3 ps-3'>
              <img width={'30%'} src={assets.cash} alt="" />
              <div className='inside-card'>
                <h2  >{item.id}</h2>
                <p style={{ color: 'grey' }}>{item.desc}</p>
                <p> <span className='amnt'>₹{item.price}</span> / {item.credits} credits</p>
                <div className='d-flex justify-content-center'>
                  <button onClick={() => paymentRazorpay(item.id)} style={{ width: '70%' }} className='btn btn-dark'>{user ? 'Purchase' : 'Get Started'}</button>
                </div>
              </div>

            </div>
          ))}
        </div>


      </div>

    </>
  )
}

export default BuyCredit
