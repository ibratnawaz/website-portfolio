import React from 'react';
import { motion } from 'framer-motion';

import Wave from './Wave';

import { titleAnimation, fade, photoAnimation } from '../animation';

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
        <motion.div className='title'>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </DescriptionStyle>
      <ImageStyle>
        <motion.img
          variants={photoAnimation}
          src='https://images.pexels.com/photos/3601491/pexels-photo-3601491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='guy with a camera'
        />
      </ImageStyle>
      <Wave />
    </LayoutStyle>
  );
};

export default AboutSection;
