import React from 'react'
import {FcApproval} from "react-icons/fc"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h2>Student testimonies</h2>
            <p>Here is what our students have to say</p>
          {/*  <a href="/">Read all 2,432 reviews</a> */}
        </div>
        <div className='testimonial-cards'>
            <div className='card'>
                <img src="person1.png" alt="" />
                <p>The class was more than I expected. I am now convinced that I have been doing Job hunting the wrong way.
                     But with this class, I have a change of mindset, new knowledge and a competitive edge.</p>
                <div className='icons'>
                    <a href="/">@web3_kaykay</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='card'>
                <img src="person2.png" alt="" />
                <p>So far so good, I will first thank myself cause I first heard it on X(twitter) space when @BigJO said, he has a class coming called The Void Masterclass.
                     That is free and gonna pass all these paid classes. The Class was Amazing, and life changing.</p>
                <div className='icons'>
                    <a href="/">@chrisjames</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person3.png" alt="" />
                <p>Words cannot adequately convey the depth and fascination of my experience.
                    I attempted to encapsulate it in a video, though I could not capture the entirety due to being overwhelmed by the richness of the encounter.</p>
                <div className='icons'>
                    <a href="/">@Pinnaclecrypt</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person4.jpg" alt="" />
                <p>I especially appreciated the variety of topics you covered, including different types of crypto jobs,
                     how to connect with big people in the crypto world, and more. I also thought the speakers you brought in were great.</p>
                <div className='icons'>
                    <a href="/">@lovettelyn</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>

            <div className='card'>
                <img src="person4.jpg" alt="" />
                <p>I especially appreciated the variety of topics you covered, including different types of crypto jobs,
                     how to connect with big people in the crypto world, and more. I also thought the speakers you brought in were great.</p>
                <div className='icons'>
                    <a href="/">@lovettelyn</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>

            <div className='card'>
                <img src="person4.jpg" alt="" />
                <p>I especially appreciated the variety of topics you covered, including different types of crypto jobs,
                     how to connect with big people in the crypto world, and more. I also thought the speakers you brought in were great.</p>
                <div className='icons'>
                    <a href="/">@lovettelyn</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials