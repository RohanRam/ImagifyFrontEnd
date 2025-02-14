import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';





const Login = () => {


  const [state, setState] = useState('Sign In')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('Male')

  const navigate = useNavigate()


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {

      if (state === 'Sign In') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {

          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          localStorage.setItem('role', data.user.role);
          setShowLogin(false)
          toast.success('Login Success')
          console.log(data.user.role);

          if (data.user.role == 'admin') {
            navigate('/admin/dashboard');
          } else {
            navigate('/');
          }


        }
        else {
          toast.error(data.message)

        }

      }
      else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password, gender })

        if (data.success) {

          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false) +
            toast.success('Registered Successfully')

        }
        else {
          toast.error(data.message)

        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])




  return (
    <>



      <div className="login-container">
        <div className='d-flex justify-content-center align-items-center login-cont '>

          <form onSubmit={onSubmitHandler} className=' form-log p-5' >


            <h1 className='text-center '>{state}</h1>
            <p style={{ color: 'gray' }} className='text-center'>Welcome back! Login to continue.</p>

            {state !== 'Sign In' &&
              <>

                <div className='d-flex align-items-center  rounded-pill log-div'>
                  <i class='bx bx-user-pin ps-2'></i>
                  <input onChange={e => setName(e.target.value)} value={name} className='w-100 border-0 rounded-pill log-inp' type="text" placeholder='Username' required />
                </div>


              </>

            }



            <div className='d-flex align-items-center mt-2 rounded-pill log-div'>
              <i class='bx bx-envelope ps-2'></i>
              <input onChange={e => setEmail(e.target.value)} value={email} className='w-100 border-0 rounded-pill log-inp' type="email" placeholder='Email' required />
            </div>

            <div className='d-flex align-items-center mt-2 rounded-pill log-div'>
              <i class='bx bx-lock-alt ps-2' ></i>
              <input onChange={e => setPassword(e.target.value)} value={password} className='w-100 border-0 rounded-pill log-inp' type="password" placeholder='Password' required />
            </div>

            {state !== 'Sign In' &&
              <>



                <div className='d-flex justify-content-center align-items-center mt-2 '>
                  <label className='me-2'>Gender:</label>
                  <input type='radio' name='gender' value='Male' checked={gender == 'male'} onChange={() => setGender('male')} /> Male
                  <input type='radio' name='gender' value='Female' checked={gender === 'female'} onChange={() => setGender('female')} className='ms-2' /> Female
                  <input type='radio' name='gender' value='Other' checked={gender === 'others'} onChange={() => setGender('other')} className='ms-2' /> Other
                </div>


              </>

            }

            {/* <p className='mt-3'>
              <a style={{ fontSize: '13px' }} href='#' className='text-decoration-none text-center '>Forgot Password?</a>
            </p> */}

            <div className='d-flex justify-content-center mt-3'>
              <button className='btn btn-primary rounded-pill px-5'>{state === 'Sign In' ? ' Login' : 'Create Account'}</button>
            </div>

            {state === 'Sign In' ?
              <p className='mt-3'>
                <p style={{ fontSize: '13px' }} href='#' className='text-decoration-none text-center '>Don't have an account? <a onClick={() => setState('Sign Up')} style={{ cursor: 'pointer' }} className='text-decoration-none'>Sign Up</a></p>
              </p>

              :

              <p className='mt-3'>
                <p style={{ fontSize: '13px' }} href='#' className='text-decoration-none text-center '>Already have an account? <a onClick={() => setState('Sign In')} style={{ cursor: 'pointer' }} className='text-decoration-none'> Sign In</a></p>
              </p>
            }

            <img onClick={() => setShowLogin(false)} className='close' src={assets.cross_icon} alt="" />
          </form>

        </div>
      </div>


    </>
  )
}

export default Login
