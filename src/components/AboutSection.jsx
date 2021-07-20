import React from 'react';
import { motion } from 'framer-motion';

import Wave from './Wave';
import { data } from '../utils/data.json';

import { titleAnimation, fade, photoAnimation } from '../utils/animation';

import {
  LayoutStyle,
  DescriptionStyle,
  ImageStyle,
  HideStyle,
} from '../utils/styles';

const AboutSection = () => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div className='title'>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
              I'm <span>{data.main.name}</span>.
            </motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fade}>
          I am <span>{data.main.occupation}</span> from{' '}
          {data.main.address.country}. {data.main.description}
        </motion.p>
        <a
          href={data.main.resumeDownload}
          target='_blank'
          rel='noopener noreferrer'>
          <motion.button variants={fade}>My Resume</motion.button>
        </a>
      </DescriptionStyle>
      <ImageStyle>
        <motion.img
          variants={photoAnimation}
          src={`images/${data.main.image}`}
          alt='guy with a camera'
        />
      </ImageStyle>
      <Wave />
    </LayoutStyle>
  );
};

export default AboutSection;
