import React from 'react'

const Section = () => {
  return (
    <div className='section'>
           <h1>What You Will Learn</h1>
        <p>The Void Academy is committed to helping people master the skill of job hunting to find High-Paying and Fulfilling Jobs.</p>
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="goals.jpg" alt="" />
                    <h1 className='font-semibold'>Identifying Your Career goals: Mapping your Career Path to the C-Suite</h1>
                    <p>Gain insights into aligning your career goals with executive positions.<br></br>
                    <br></br>
                    Learn strategic planning to navigate the path towards leadership roles.</p>
                  
                </div>
                <div className='card'>
                    <img src="resume.jpg" alt="" />
                    <h1 className='font-semibold'>Crafting a Resume and Cover letter that will land you your dream job</h1>
                    <p>Develop skills in creating compelling resumes and cover letters.
                    <br></br>
                    <br></br>
                 Understand key elements that make you stand out to potential employers.</p>
                  
                </div>
                <div className='card'>
                    <img src="globe.jpg" alt="" />
                    <h1 className='font-semibold'>Mastering the Art of Networking and Building Powerful Relationships</h1>
                    <p>Learn effective networking strategies to expand professional connections.
                    <br></br>
                    <br></br>
                    Develop interpersonal skills for building and maintaining impactful relationships.
                    </p>
                { /*  <a href="/">learn &rarr;</a> */}
                </div>

                <div className='card'>
                    <img src="interview.jpg" alt="" />
                    <h1 className='font-semibold'>Acing Your Job Interviews</h1>
                    <br></br>
                    <p>Acquire techniques to excel in various job interview formats.
                    <br></br>
                    <br></br>
                    Boost confidence and present yourself as the ideal candidate.
                    </p>
                </div>
                
                <div className='card'>
                    <img src="3.png" alt="" />
                    <h1 className='font-semibold'>Negotiating Your Salary Like a Pro</h1>
                    <p>Master salary negotiation tactics to maximize your compensation.
                    <br></br>
                    <br></br>
                    Understand the art of balancing assertiveness and collaboration during negotiations..</p>
                </div>

                  
                <div className='card'>
                    <img src="2.png" alt="" />
                    <h1 className='font-semibold'>Onboarding and Thriving in a New Role and Quickly Becoming a Valuable Asset</h1>
                    <p>Navigate the onboarding process seamlessly for a strong start.
                    <br></br>
                    <br></br>
                    Learn how to contribute effectively and become an indispensable team member.</p>
                </div>

                <div className='card'>
                    <img src="asset.jpg" alt="" />
                    <h1 className='font-semibold'>Freelancing for Success: Building a 6-Figure Freelancing Career</h1>
                    <br></br>
                    <p>Explore strategies for establishing a lucrative freelancing career.
                    <br></br>
                    <br></br>
                    Learn to manage clients, projects, and finances for sustained success.</p>
                </div>

                <div className='card'>
                    <img src="thought.jpg" alt="" />
                    <h1 className='font-semibold'>Building a Powerful Personal Brand and Becoming a Thought Leader in Your Industry</h1>
                    
                    <p>Develop a distinctive personal brand that reflects your expertise.
                    <br></br>
                    <br></br>
                    Learn to position yourself as a thought leader through content and engagement.</p>
                </div>


            </div>
        </div>
        <div className='inner-section'>
         <div className='section-text'>
                <h5>Join In Now</h5>
                <h1>THE CHOICE IS YOURS</h1>
                <p></p>
                <div className='button'><a href="/">Enroll Now</a></div>
            </div>              
            <div className='section-image'>
                <img src="Group 3.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section