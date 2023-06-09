import React,{useEffect} from 'react'
import video from '../../assets/video.mp4'
import flying from '../../assets/aeroplane.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-Lasting Memories With Us</h1>
        </div>

        <div data-aos='fade-down' data-aos-duration='2500'className="homeImage flex">
          <div className="videoDiv">
            <video src={video} className='video' autoPlay muted loop ></video>             
          </div>

          <img src={flying} alt=""  className='plane'/>
        </div>
    </div>
  )
}

export default Home