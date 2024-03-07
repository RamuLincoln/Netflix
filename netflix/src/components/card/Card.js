import React from 'react';
import Slider from "react-slick";

const Card = ({data}) => {
    const settingslarge = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9
      };
      const settingssmall = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };
      const mobile = window.innerWidth<=760 ? true : false;
      console.log(window.innerWidth)
  return (
    <div className='my-3'>
        {
            data.length>0 ?
            <>
               <div className="slider-container">
                {mobile ? <Slider {...settingslarge}>
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
                    
                    </Slider> : 
                    <Slider {...settingssmall}>
                        {
                            data.map((current)=>{
                                return (
                                    <>
                                <div>
                                    <div className='card'>
                                        <div className='card-body p-0'>
                                            <img src={current.images} alt='' className='w-80 h-80 card_latest img_latest img-fluid' />
                                        </div>
                                    </div>
                                </div>
                                </>
                                )
                            })
                        }
                    
                    </Slider>}
                </div>
            </> : <div>Loading</div>
        }
 
  </div>
  )
}

export default Card