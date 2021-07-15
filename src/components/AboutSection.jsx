import React from 'react';

import {
  LayoutStyle,
  DescriptionStyle,
  ImageStyle,
  HideStyle,
} from '../styles';

const AboutSection = () => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <div className='title'>
          <HideStyle>
            <h2>We work to make</h2>
          </HideStyle>
          <HideStyle>
            <h2>
              your <span>dreams</span> come
            </h2>
          </HideStyle>
          <HideStyle>
            <h2>true.</h2>
          </HideStyle>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Me</button>
      </DescriptionStyle>
      <ImageStyle>
        <img
          src='https://images.pexels.com/photos/3601491/pexels-photo-3601491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='guy with a camera'
        />
      </ImageStyle>
    </LayoutStyle>
  );
};

export default AboutSection;
