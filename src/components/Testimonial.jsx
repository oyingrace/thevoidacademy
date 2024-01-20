import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },  {
            breakpoint: 800, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
    const data =[
        {
            name:'@JiokeBankz',
            image:"/test1.jpg",
            review:"So far so good, I will first thank myself cause I first heard it on X(twitter) space when @BigJO said, he has a class coming called The Void Masterclass. The Class was Amazing, and life changing.",
        },
        {
          name:'@web3_kaykay',
          image:"/person3.png",
          review:"The class was more than I expected. I am now convinced that I have been doing Job hunting the wrong way. But with this class, I have a change of mindset, new knowledge and a competitive edge",
      },
        {
            name:'@Pinnaclecrypt',
            image:"/test2.jpeg",
            review:"Words cannot adequately convey the depth and fascination of my experience. I attempted to encapsulate it in a video, though I could not capture the entirety due to being overwhelmed by the richness of the encounter.",
        },
        {
            name:'@lovettelyn',
            image:"/person1.png",
            review:"I especially appreciated the variety of topics you covered, including different types of crypto jobs, how to connect with big people in the crypto world, and more. I also thought the speakers you brought in were great.            ",
        },
        {
            name:'@jebenezerroland',
            image:"/test3.jpg",
            review:"I was an uncertain job-hunter; uncertain about my strategies, my resume, my approach and the likes. During the void class, I learnt the right approach, strategies, and how to craft my resume and proposals",
        },
        {
            name:'@Micheal_SKRTV',
            image:"/person2.png",
            review:"Honestly, this is where I really learnt something intentionally. A lot of different things I saw. The void did not only teach us how to make money in Web3, it also touched our way of living.",
        },
        {
            name:'@SimonChuks22',
            image:"/test5.jpg",
            review:"The void Masterclass gave me invaluable insight into the realm of web3 job hunting, serving as an enlightening experience.",
        },

    ]
  return (
    <div className='w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
            {data.map((d) =>(
                <div className='bg-yellow-50 h-[450px] text-black rounded-t-xl'>
                    <div className=' h-30 rounded-t-xl bg-yellow-50 flex justify-center items-center'>
                        <img src={d.image} alt="" className='h-20 w-20 rounded-full'/>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p>{d.review} </p>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        
                    </div>
                </div>
            ))}
            </Slider>

        </div>

    </div>
  )
}

export default Testimonial;