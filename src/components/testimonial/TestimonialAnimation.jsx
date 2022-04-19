import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Nancy Byers",
      rating: "5.0",
    },
    {
      imageName: "team-2",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Jara Afsari",
      rating: "4.8",
    },
    {
      imageName: "team-4",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Janiaya kiaram",
      rating: "5.0",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div className="testmonial-box media" key={i}>
            <Fade bottom>
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
            </Fade>
            {/* End avatar */}
            <Fade bottom>
              <div className="testmonial-text media-body">
                <p>{val.desc}</p>
                <div className="testmonial-info">
                  <h6>{val.reviewerName}</h6>
                  <div className="rating-value">
                    <i className="ti-star"></i>
                    <span>{val.rating}</span>
                  </div>
                </div>
              </div>
            </Fade>
            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
