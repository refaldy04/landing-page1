import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { IconContext } from 'react-icons';
import { SiMcdonalds } from 'react-icons/si';
import { SiStarbucks } from 'react-icons/si';
import { SiKfc } from 'react-icons/si';
import { SiPremierleague } from 'react-icons/si';
import { SiReactivex } from 'react-icons/si';
import { SiAmazon } from 'react-icons/si';
import { SiAlipay } from 'react-icons/si';
import { SiCrunchyroll } from 'react-icons/si';
import { SiDcentertainment } from 'react-icons/si';
import { SiGlitch } from 'react-icons/si';
import { SiLionair } from 'react-icons/si';
import { SiQemu } from 'react-icons/si';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <h3 className='header text-light'>Available</h3>
        <p className='text-light fw-bol fs-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='d-flex justify-content-center gap-3'>
          <button className='indo rounded'></button>
          <button className='alfa rounded'></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className='d-block w-100'
          src='https://source.unsplash.com/random'
          alt='First slide'
        /> */}

        <h1 className='header text-light'>The best!</h1>
        <p className='text-light fw-bol fs-3 w-50 mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          perferendis at accusantium ducimus, dolor repellendus.
        </p>
        <div className='d-flex justify-content-center gap-3'>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiMcdonalds />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiStarbucks />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiKfc />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiPremierleague />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiReactivex />
            </div>
          </IconContext.Provider>
        </div>
        <div className='d-flex justify-content-center gap-3 mt-3'>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiAmazon />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiAlipay />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiCrunchyroll />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiDcentertainment />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiGlitch />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiLionair />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
            <div>
              <SiQemu />
            </div>
          </IconContext.Provider>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <h3 className='header text-light'>Third slide</h3>
        <p className='text-light fw-bol fs-3'>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;
