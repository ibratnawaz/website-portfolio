import React from 'react';
import { motion } from 'framer-motion';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ScrollTop from '../components/ScrollTop';

import { pageAnimation } from '../utils/animation';

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <AboutSection />
      <ServicesSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
