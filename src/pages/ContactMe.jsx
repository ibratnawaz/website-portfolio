import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
        <div class='contact-wrapper'>
          <form>
            <input
              type='text'
              class='form-control'
              id='name'
              placeholder='NAME'
              name='name'
              value=''
              required
            />

            <input
              type='email'
              class='form-control'
              id='email'
              placeholder='EMAIL'
              name='email'
              value=''
              required
            />

            <textarea
              class='form-control'
              rows='10'
              placeholder='MESSAGE'
              name='message'
              required></textarea>

            <button id='submit' type='submit' value='SEND'>
              <i class='ri-send-plane-fill'></i> &nbsp;SEND
            </button>
          </form>
          <div class='direct-contact-container'>
            <ul class='contact-list'>
              <li class='list-item'>
                <i class='ri-map-pin-2-fill'>
                  <span class='contact-text'>City, State</span>
                </i>
              </li>

              <li class='list-item'>
                <i class='ri-phone-fill'>
                  <span class='contact-text'>
                    <a href='tel:1-212-555-5555' title='Give me a call'>
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li class='list-item'>
                <i class='ri-mail-fill'>
                  <span class='contact-text'>
                    <a href='mailto:#' title='Send me an email'>
                      hitmeup@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul class='social-media-list'>
              <li>
                <a href='#' target='_blank' class='contact-icon'>
                  <i class='ri-github-fill'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank' class='contact-icon'>
                  <i class='ri-linkedin-box-fill'></i>
                </a>
              </li>
            </ul>
            <hr />
            <div class='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </ContactStyle>
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
  }

  form {
    width: 500px;
    font-family: monospace;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin-right: 64px;
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
    color: #555;
    letter-spacing: 1px;
    text-align: left;
    margin-top: 24px;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.6);
    width: 70%;
    margin: 12px 0px;
  }

  /* Begin Media Queries*/
  /* @media screen and (max-width: 850px) {
    .contact-wrapper {
      display: flex;
      flex-direction: column;
    }
    .direct-contact-container,
    .form-horizontal {
      margin: 0 auto;
    }

    .direct-contact-container {
      margin-top: 60px;
      max-width: 300px;
    }
    .social-media-list li {
      height: 60px;
      width: 60px;
      line-height: 60px;
    }
    .social-media-list li:after {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  @media screen and (max-width: 569px) {
    .direct-contact-container,
    .form-wrapper {
      float: none;
      margin: 0 auto;
    }
    .form-control,
    textarea {
      margin: 0 auto;
    }

    .name,
    .email,
    textarea {
      width: 280px;
    }

    .direct-contact-container {
      margin-top: 60px;
      max-width: 280px;
    }
    .social-media-list {
      left: 0;
    }
    .social-media-list li {
      height: 55px;
      width: 55px;
      line-height: 55px;
      font-size: 2rem;
    }
    .social-media-list li:after {
      width: 55px;
      height: 55px;
      line-height: 55px;
    }
  }

  @media screen and (max-width: 410px) {
    .send-button {
      width: 99%;
    }
  } */
`;

export default ContactMe;
