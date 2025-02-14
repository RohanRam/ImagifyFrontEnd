import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Result = () => {

  const [image, setImage] = useState(assets.sample_img_6)
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  const { generateImage } = useContext(AppContext)

  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {

    e.preventDefault()
    setLoading(true)
    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImgLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)

  }



  return (
    <>

      <form onSubmit={onSubmitHandler} className='result-form'>
        <div className='d-flex align-items-center justify-content-center' >
          <div className='result'>

            <img className='rounded result-img' src={image} alt="" />
            <span className={`result-span ${loading ? 'w-100' : 'w-0'}`} />

          </div>
        </div>
        <p className={!loading ? 'd-none' : ''}> Loading ... </p>

        {!isImgLoaded ?
          <div className='d-flex  mt-5 result-inp-cont '>
            <input
              onChange={e => setInput(e.target.value)} value={input}
              type="text" placeholder='Describe your imagination' className=' rounded-pill result-inp w-100 p-2' />
            <button style={{ backgroundColor: 'black' }} className='btn btn-dark rounded-pill px-4 ms-2 inp-btn' type='submit'>
              Generate

            </button>

          </div>
          :

          <div className='result-down mt-5'>
            <span style={{cursor:'pointer'}}  onClick={() => { setIsImgLoaded(false) }} className='down-b1 rounded-pill p-2 text-center'>Generate Another</span>
            <a style={{cursor:'pointer'}}  download="generated-image.png"  className='down-b2 rounded-pill p-2 text-center' href={image} >Download </a>
            {/* <a style={{cursor:'pointer'}} onClick={handleDownload} className='down-b2 rounded-pill p-2 text-center'  >Download </a> */}



          </div>
        }
      </form>

    </>
  )
}

export default Result
