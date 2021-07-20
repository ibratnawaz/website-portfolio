import React from 'react';
import styled from 'styled-components';

import { useScroll } from '../utils/useScroll';
import { scrollReveal } from '../utils/animation';
import { LayoutStyle, DescriptionStyle, ImageStyle } from '../utils/styles';

import coder from '../images/coder.svg';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <CustomizeLayoutStyle
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}>
      <DescriptionStyle>
        <h2>
          High <span>quality</span> skills
        </h2>
        <CardsStyle>
          <CardStyle>
            <div className='icon'>
              <i className='ri-time-line'></i>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i className='ri-group-line'></i>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i className='ri-camera-lens-line'></i>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i className='ri-money-dollar-circle-line'></i>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
        </CardsStyle>
      </DescriptionStyle>
      <ImageStyle>
        <img src={coder} alt='svg-coder-img' />
      </ImageStyle>
    </CustomizeLayoutStyle>
  );
};

const CustomizeLayoutStyle = styled(LayoutStyle)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const CardStyle = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
