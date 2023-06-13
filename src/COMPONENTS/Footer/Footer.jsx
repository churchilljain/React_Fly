import React,{useEffect} from 'react'
import logo from '../../assets/logo.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="GridOne">
          <div className="logoDiv">
            <img src={logo} className='logo' alt="" />
          </div>

          <p>Your mind should be stronger than your feelings, Fly </p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icons'/>
            <AiOutlineTwitter className='icons'/>
            <AiFillYoutube className='icons'/>
            <FaPinterestP className='icons'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li>
            <a href='' className='footLink'>home</a>
          </li>
          <li>
            <a href='' className='footLink'>explore</a>
          </li>
          <li>
            <a href='' className='footLink'>flight status</a>
          </li>
          <li>
            <a href='' className='footLink'>travel</a>
          </li>
          <li>
            <a href='' className='footLink'>check-In</a>
          </li>
          <li>
            <a href='' className='footLink'>manage your booking</a>
          </li>
                 
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href='' className='footLink'>FAQ</a>
          </li>
          <li>
            <a href='' className='footLink'>How to</a>
          </li>
          <li>
            <a href='' className='footLink'>features</a>
          </li>
          <li>
            <a href='' className='footLink'>Baggage</a>
          </li>
          <li>
            <a href='' className='footLink'>Route Map</a>
          </li>
          <li>
            <a href='' className='footLink'>Our communities</a>
          </li>
                 
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li>
            <a href='' className='footLink'>home</a>
          </li>
          <li>
            <a href='' className='footLink'>explore</a>
          </li>
          <li>
            <a href='' className='footLink'>flight status</a>
          </li>
          <li>
            <a href='' className='footLink'>travel</a>
          </li>
          <li>
            <a href='' className='footLink'>chech-In</a>
          </li>
          <li>
            <a href='' className='footLink'>manage your booking</a>
          </li>
                 
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>Courtsey Design | Developed by <a href='https://emailto-churchilkauchhal@gmil.com' target='_blank'>Churchill.jain</a></p>
      </div>
    </div>
  )
}

export default Footer