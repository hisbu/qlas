import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Image1 from './../supports/img/carousel/img1.jpg'
import Image2 from './../supports/img/carousel/img2.jpg'
import Image3 from './../supports/img/carousel/img4.jpg'
import Image4 from './../supports/img/carousel/img3.jpg'


// function NextArrow(props){
//     const { className, style, onClick} = props;
//     return(
//         <div>
//             className={className}
//             style={{...style, marginLeft: '-10px'}}
//             onClick={onClick}
//         </div>
//     )
// }

// function PrevArrow(props){
//     const { className, style, onClick} = props;
//     return(
//         <div>
//             className={className}
//             style={{...style}}
//             onClick={onClick}
//         </div>
//     )
// }

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      autoPlay: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='imgCarousel'>
            <img src={Image1} alt='1' width="100%"/>
          </div>
          <div  className=' imgCarousel'>
            <img src={Image2} alt='1' width="100%" />
          </div>
          <div  className=' imgCarousel'>
            <img src={Image3} alt='1' width="100%" />
          </div>
          <div  className=' imgCarousel'>
            <img src={Image4} alt='1' width="100%" />
          </div>
          <div  className=' imgCarousel'>
            <img src={Image1} alt='1' width="100%" />
          </div>
          <div  className=' imgCarousel'>
            <img src={Image2} alt='1' width="100%"/>
          </div>
        </Slider>
      </div>
    );
  }
}