import React,{useEffect} from 'react'
import paris  from '../../assets/paris.jpg'
import p1 from '../../assets/p1.jpg'

import newyork  from '../../assets/newyork.jpg'
import p2 from '../../assets/p2.jpg'

import dubai  from '../../assets/dubai.jpg'
import p3 from '../../assets/p3.jpg'

import london  from '../../assets/london.jpg'
import p4 from '../../assets/p4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers= [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: p1,
    travelerName: 'IsraTech',
    socialLink: '@isratech'
  },

  {
    id: 2,
    destinationImage: newyork,
    travelerImage: p2,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },

  {
    id: 3,
    destinationImage: dubai,
    travelerImage: p3,
    travelerName: 'Nicole web',
    socialLink: '@nicoleweb'
  },

  {
    id: 4,
    destinationImage: london,
    travelerImage: p4,
    travelerName: 'Naresh lamer',
    socialLink: '@nareshlamer'
  }
]

const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travellers of the month!</h2>

        <div className="travelersContainer grid">
          
          {
          travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
              return(
                
                <div key={id} data-aos='fade-up' data-aos-duration='2500' className="singleTraveler">
                  <img src={destinationImage} alt="" className='destinationImage'/>
                  
                  <div className="travelerDetail">
                    <div className="travelerPicture">
                      <img src={travelerImage} alt="" className='travelerImage'/>                
                    </div>

                    <div className="travelerName">
                      <span className='-span'>{travelerName}</span>
                      <p className='pclass'>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
          })
        }


        </div>
      </div>
    </div>
  )
}

export default Travelers