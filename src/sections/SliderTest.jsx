import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderTest = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  let asserts = [
    {
      id: 1,
      img: "/slider1.webp",
    },
    {
      id: 2,
      img: "/slider2.jpeg",
    },
    {
      id: 3,
      img: "/slider3.webp",
    },
    {
      id: 4,
      img: "/slider4.jpeg",
    },
  ];
  return (
    <div className="mt-8 mb-6 px-20">
      <div className="max-w-[535px] rounded-md">
        <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
          {asserts.map(({ img }, index) => {
            return (
              <div key={index} className="">
                <Image
                  src={img}
                  width={500}
                  height={500}
                  alt="img"
                  className="w-[550px] h-[600px] rounded-md object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="max-w-[550px] h-40 rounded-md mt-6">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {asserts.map(({ img }, index) => {
            return (
              <div className="">
                <Image
                  key={index}
                  src={img}
                  width={500}
                  height={500}
                  alt="img"
                  className="w-[170px] h-[140px] object-cover rounded-lg"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderTest;
