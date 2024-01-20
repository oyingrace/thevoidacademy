import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                <img src="bulb.png" alt="" />
                <h1>DREAM BIG <br/>EARN BIG</h1>
            </div>
            <div className='footer-text'>
                <p>Gain the skills and knowledge you need to succeed in the job market. Network with other job seekers and receive personalized feedback. Enroll today and start your journey to career success!</p>
                <a href="/">Enroll Now</a>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news-left'>
                <h4>Subscribe</h4>
                <h1>Subscribe To Get Latest <br />Update From Us</h1>
                <span className='curve'><img src="curve.png" alt="" /></span>
            </div>
            <div className='news-right'>
                <p></p>
                <form action="">
                    <input type="email" name='email' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='footer-menu'>
        <h1 className='font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
  THEVOIDACADEMY
</h1>
            <ul className='footer-inner-nav'>
                <li><a href="#hub"><FaXTwitter /></a></li>
                <li><a href="#mint"><FaTelegramPlane /></a></li>
                <li><a href="#features"><FaWhatsapp /></a></li>
            </ul>
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2024 | All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer