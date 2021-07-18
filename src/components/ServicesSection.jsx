import React from 'react';
import styled from 'styled-components';

import { useScroll } from '../utils/useScroll';

import { scrollReveal } from '../utils/animation';

import { LayoutStyle, DescriptionStyle, ImageStyle } from '../utils/styles';

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
          High <span>quality</span> services
        </h2>
        <CardsStyle>
          <CardStyle>
            <div className='icon'>
              <i class='ri-time-line'></i>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i class='ri-group-line'></i>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i class='ri-camera-lens-line'></i>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className='icon'>
              <i class='ri-money-dollar-circle-line'></i>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
        </CardsStyle>
      </DescriptionStyle>
      <ImageStyle>
        <img
          src='https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='camera'
        />
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
