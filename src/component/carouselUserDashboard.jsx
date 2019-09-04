import React from "react";
// import ReactDOM from "react-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
// import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    // var settings = {
      
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "60px",
    //   slidesToShow: 1,
    //   speed: 500

    // };
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "80px",
      // className: 'center',
      // centerMode: 'true',
      // vertical: true,
      // verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2600,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    const { style } = this.props;
    return (
      <div className="carousel" style={{...style, width: '100%'}}>
        <Slider {...settings}>
          <div className='img-fluid'>
            <img src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/27/20723472/20723472_12a601b0-b2f5-40a2-887c-adcf0a8af96c.jpg" alt='i1a'/>
          </div>
          <div>
            <img src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/27/20723472/20723472_a8416c02-ba84-4947-89ee-f9ef468a34ed.jpg" alt='i1b'/>
          </div>
          <div>
            <img src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/27/20723472/20723472_cd6275b3-91c7-4c8b-b4e7-fdefc4f467df.jpg" alt='i1c'/>
          </div>
          <div>
            <img src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/23/20723472/20723472_35a2758c-ee48-456c-a3d9-5ec5a7fb3ebb.jpg" alt='i1d'/>
          </div>
        </Slider>
      </div>
    );
  }
}

export  default ReactSlickDemo;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"
// import Image1 from './../supports/img/carousel/img1.jpg'
// import Image2 from './../supports/img/carousel/img2.jpg'
// import Image3 from './../supports/img/carousel/img4.jpg'
// import Image4 from './../supports/img/carousel/img3.jpg'


// // function NextArrow(props){
// //     const { className, style, onClick} = props;
// //     return(
// //         <div>
// //             className={className}
// //             style={{...style, marginLeft: '-10px'}}
// //             onClick={onClick}
// //         </div>
// //     )
// // }

// // function PrevArrow(props){
// //     const { className, style, onClick} = props;
// //     return(
// //         <div>
// //             className={className}
// //             style={{...style}}
// //             onClick={onClick}
// //         </div>
// //     )
// // }

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       autoPlay: true,
//       centerPadding: "60px",
//       slidesToShow: 1,
//       speed: 500
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <div className='imgCarousel'>
//             <img src={Image1} alt='1' width="100%"/>
//           </div>
//           <div  className=' imgCarousel'>
//             <img src={Image2} alt='1' width="100%" />
//           </div>
//           <div  className=' imgCarousel'>
//             <img src={Image3} alt='1' width="100%" />
//           </div>
//           <div  className=' imgCarousel'>
//             <img src={Image4} alt='1' width="100%" />
//           </div>
//           <div  className=' imgCarousel'>
//             <img src={Image1} alt='1' width="100%" />
//           </div>
//           <div  className=' imgCarousel'>
//             <img src={Image2} alt='1' width="100%"/>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }