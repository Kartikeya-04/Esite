import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import Slider from 'react-slick';
import Lottie from 'lottie-react';
import carousel from '../assets/carousel.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

function Home() {
  const [first, setfirst] = useState([]);

  const getall = async () => {
    const resp = await fetch('http://localhost:7500/fetch', {
      method: 'GET',
    });
    const data = await resp.json();
    console.log(data);
    setfirst(data);
  };

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };

  useEffect(() => {
    getall();
  }, []);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="text-black bg-blue-200 mb-10 h-auto w-auto pb-32">
        <div className="slide w-screen flex flex-row justify-center items-center">
          <Slider {...settings}>
            <div>
              <Lottie animationData={carousel} className="h-32"></Lottie>
            </div>
            <div>
              <Lottie animationData={carousel} className="h-32"></Lottie>
            </div>
            <div>
              <Lottie animationData={carousel} className="h-32"></Lottie>
            </div>
          </Slider>
        </div>
        <h3>Product details are as follows </h3>
        <div className="grid grid-cols-4 grid-rows-5 gap-5">
          {first.map((c, i) => {
            return (
              <div>
                <div
                  className="home bg-pink-300 rounded-lg w-auto mb-2"
                  key={i}
                >
                  <h5>Name :{c.title}</h5>
                  {/* extra */}
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {c.description}
                  </h6>
                  <li>
                    <img
                      src={c.thumbnail}
                      height="200px"
                      width="300px"
                      alt={c.id}
                    />

                    <li>
                      Discounted % : {c.discountPercentage} rating : {c.rating}
                    </li>
                    <li>
                      {' '}
                      brand : {c.brand} category : {c.category}
                    </li>
                    <li>
                      Stock : {c.stock} , price : {c.price}
                    </li>
                  </li>
                  <a href="#" class="card-link">
                    {c.id}
                  </a>
                  {/* extra end */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
