import React,{useEffect} from 'react'
import lounge from '../../assets/lounge.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    
    <div className='lounge conatiner section'>
      <div className="sectionContainer grid">

        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={lounge} alt="" className='imagee'/>
        </div>

          <div className='secondGrid'>
            <div className="textDiv">
              <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied minor lounge</h2>
            </div>

            <div className="grids grid">
              <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                <span className="gridTitle">
                  Help through the airport
                </span>
                
                <p>You can also call from your phoneand book a flight ticket to ine of your favourite destination</p>
              </div>

              <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                <span className="gridTitle">
                  Priority Boarding
                </span>
                
                <p>You can also call from your phoneand book a flight ticket to ine of your favourite destination</p>
              </div>

              <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                <span className="gridTitle">
                  Care on the flight
                </span>
                
                <p>You can also call from your phoneand book a flight ticket to ine of your favourite destination</p>
              </div>

              <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                <span className="gridTitle">
                  Chauffeur-drive service
                </span>
                
                <p>You can also call from your phoneand book a flight ticket to ine of your favourite destination</p>
              </div>
            </div>
        </div>      
      </div>
    </div>
  )
}

export default Lounge