import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import ScrollTop from '../components/ScrollTop';

import { pageAnimation } from '../utils/animation';

const ContactMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <ContactStyle>
        <h1>Contact Me</h1>
        <div className='contact-wrapper'>
          <form>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='NAME'
              name='name'
              required
            />

            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='EMAIL'
              name='email'
              required
            />

            <textarea
              className='form-control'
              rows='10'
              placeholder='MESSAGE'
              name='message'
              required></textarea>

            <button id='submit' type='submit'>
              <i className='ri-send-plane-fill'></i> &nbsp;SEND
            </button>
          </form>
          <div className='direct-contact-container'>
            <ul className='contact-list'>
              <li className='list-item'>
                <i className='ri-map-pin-2-fill'>
                  <span className='contact-text'>City, State</span>
                </i>
              </li>

              <li className='list-item'>
                <i className='ri-phone-fill'>
                  <span className='contact-text'>
                    <a href='tel:1-212-555-5555' title='Give me a call'>
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li className='list-item'>
                <i className='ri-mail-fill'>
                  <span className='contact-text'>
                    <a
                      href='mailto:nawazmd0096@gmail.com'
                      title='Send me an email'>
                      nawazmd0096@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className='social-media-list'>
              <li>
                <a
                  href='https://github.com/ibratnawaz'
                  target='_blank'
                  className='contact-icon'
                  rel='noreferrer'>
                  <i className='ri-github-fill'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/ibrat-nawaz-08b677183/'
                  target='_blank'
                  className='contact-icon'
                  rel='noreferrer'>
                  <i className='ri-linkedin-box-fill'></i>
                </a>
              </li>
            </ul>
            <hr />
            <div className='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </ContactStyle>
      <ScrollTop />
    </motion.div>
  );
};

const ContactStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
  overflow-y: hidden;
  overflow-x: hidden;
  h1 {
    text-align: center;
    padding: 40px 0;
    font-size: 60px;
    font-weight: 300;
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  .contact-wrapper {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  form {
    width: 500px;
    font-family: monospace;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin-right: 64px;
    @media screen and (max-width: 850px) {
      width: 80vw;
      margin: 0px;
    }
    @media screen and (min-width: 1024px) {
      width: 500px;
      margin-right: auto;
      padding-right: 24px;
    }

    button {
      margin-top: 24px;
      padding: 0.5rem !important;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        .ri-send-plane-fill {
          color: white;
        }
      }
    }
    .form-control,
    textarea {
      background-color: #000;
      color: #fff;
      letter-spacing: 1px;
    }
    input,
    textarea {
      padding: 12px;
      margin: 8px 0px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      outline: none;
      border: 1px solid #dddddd;
      &:focus {
        box-shadow: 0 0 5px #f9004d;
        border: 1px solid #f9004d;
      }
    }
  }

  .direct-contact-container {
    margin-left: 64px;
    width: 400px;
    @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;
      margin-left: 24%;
    }
    @media screen and (max-width: 320px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;
      margin-left: 32%;
    }
  }

  .contact-list {
    list-style-type: none;
  }

  .list-item {
    line-height: 3;
    color: #aaa;
    i {
      font-size: 18px;
    }
  }

  .contact-text {
    font: 300 18px 'Lato', sans-serif;
    letter-spacing: 2px;
    color: #bbb;
    margin-left: 48px;
  }

  .contact-text a {
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
  }

  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }

  .social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    display: flex;
  }

  .social-media-list li a {
    color: #fff;
    text-decoration: none;
  }

  .social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 24px 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all 0.2s ease-in-out;
  }

  .social-media-list li:hover {
    background-color: #f9004d;
    i {
      color: #fff;
    }
  }

  .social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
  }

  .copyright {
    font: 200 14px sans-serif;
    color: #fff;
    letter-spacing: 1px;
    text-align: left;
    margin-top: 24px;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.6);
    width: 70%;
    margin: 12px 0px;
    @media screen and (max-width: 850px) {
      width: 80%;
    }
    @media screen and (max-width: 320px) {
      width: 70%;
    }
  }
`;

export default ContactMe;
