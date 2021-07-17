import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animation';

const ContactMe = () => {
  return <motion.div variants={pageAnimation}
  initial='hidden'
  animate='show'
  exit='exit'>ContactMe</motion.div>;
};

export default ContactMe;
