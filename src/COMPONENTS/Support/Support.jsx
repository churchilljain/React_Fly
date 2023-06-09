import React,{useEffect} from 'react'
import collage from '../../assets/collage.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="titleDiv">
          <small className='smoli'>travel support</small>
          <h2>plan your travel with cofidence </h2>
          <p className='pee'>find help with travel and booking plan, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>travel requrements for Dubai</h4>
              <p>find help with travel and booking plan, see what to expect along the journey!</p>
            </div>
          

       
            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chaffeur services at your arrival</h4>
              <p>find help with travel and booking plan, see what to expect along the journey!</p>
            </div>
         

       
            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>find help with travel and booking plan, see what to expect along the journey!</p>
            </div>

            

          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
              <img src={collage} alt="" className='collage' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support