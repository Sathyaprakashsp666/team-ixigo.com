import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './Slider.css'

const ImageSlider = () => {
 ;
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '260px',
    slidesToShow: 3,
    speed: 400,

    
  }
  return (
    <div className="main_slider_container">
      <p>Best Deals on Bus booking</p>
      <Slider {...settings}>
        <div>
          <img
            src='https://images.ixigo.com/image/upload/f_auto/e43e3737e8db646e2e8f24a5e223ef67-owsqm.png' alt=''
            
          />
        </div>
        <div>
          <img src='https://images.ixigo.com/image/upload/f_auto/06512ca5b712cf2ead40065a60500062-peiym.png'  alt=''/>
        </div>
        <div>
          <img src='https://images.ixigo.com/image/upload/f_auto/bcdf84b5ec702d21b54c5a0203ebf839-blrbh.png'  alt=''/>
        </div>
        <div>
          <img src='https://images.ixigo.com/image/upload/f_auto/d6a812099dc33279b42abfebd6ca2645-sgfff.png'  alt=''/>
        </div>
        <div>
          <img src='https://images.ixigo.com/image/upload/f_auto/da4f40416af6046f15eb1ac3ffb3d5e8-nbfgz.png'  alt=''/>
        </div>
        <div>
          <img src='https://images.ixigo.com/image/upload/f_auto/391b1b67440158ed284bcbda10746a38-ycxnp.png' alt='' />
        </div>
        <div>
          <img src="https://images.ixigo.com/image/upload/f_auto/1a0fe036e53b4e3057dafbf5ae4b6ae9-knmlz.png" alt=''/>
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
