import React from "react";
import Slider from "react-slick";
import { moviesBannerData } from "../../Data";

const BannerSlide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
    <div className="slider-container">
        <Slider {...settings}>
        {
            moviesBannerData.map((current,index)=>{
                return(
                    <>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 d-flex align-items-center">
                            <div className="movie-content p-5 text-white">
                                <h1>{current.title}</h1>
                                <div className="desc">
                                    <p>{current.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <img src={current.image} alt={current.title} className="img-fluid" />
                        </div>
                    </div>
                    </>
                )
            })
        }
        </Slider>
     </div>
  </div>
  )
}

export default BannerSlide