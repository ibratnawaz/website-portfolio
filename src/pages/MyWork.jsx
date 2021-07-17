import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animation';

const MyWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      MyWork
    </motion.div>
  );
};

export default MyWork;
