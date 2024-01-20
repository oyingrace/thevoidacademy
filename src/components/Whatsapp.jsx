import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Whatsapp = () => {
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

      const data = [
        {
            image:"/w1.png",
        },
        {
            image:"/w2.png",
        },
        {
            image:"/w3.png",
        },
        {
            image:"/w4.png",
        },
        {
            image:"/w5.png",
        },
        {
            image:"/w6.png",
        },
        {
            image:"/w13.png",
        },
        {
            image:"/w9.png",
        },
        {
            image:"/w10.png",
        },
        {
            image:"/w11.png",
        },
        {
            image:"/w12.png",
        },
      ]
  return (
    <div className="max-w-4xl mx-auto my-8">
       <div className='section'>
     <h1 >Student testimonials</h1>
            <p>Here is what our students have to say</p>
            </div> 
    <Slider {...settings} className="relative">
      {data.map((item, index) => (
        <div key={index} className="px-4">
          <img src={item.image} alt={`whatsapp-${index}`} className="rounded-lg h-64 w-full object-cover" />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Whatsapp