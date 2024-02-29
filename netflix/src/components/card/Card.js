import React from 'react';
import Slider from "react-slick";

const Card = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9
      };
  return (
    <div className='my-3'>
        {
            data.length>0 ?
            <>
               <div className="slider-container">
                    <Slider {...settings}>
                        {
                            data.map((current)=>{
                                return (
                                    <>
                                <div>
                                    <div className='card'>
                                        <div className='card-body p-0'>
                                            <img src={current.images} alt='' className='w-100 h-100 img_latest img-fluid' />
                                        </div>
                                    </div>
                                </div>
                                </>
                                )
                            })
                        }
                    
                    </Slider>
                </div>
            </> : <div>Loading</div>
        }
 
  </div>
  )
}

export default Card