import React from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMap, faMountain, faMountainSun, faPhone } from '@fortawesome/free-solid-svg-icons';
import logoFooter from '../assets/imgs/logo-icon-mytravel-gold-text-white.svg';

const FooterWrapper = styledComponents.footer`
  padding: 1rem 9%;
  background-color: var(--color-secondary);
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

const BoxContainer = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
`;

const Box = styledComponents.div`
  padding: 1rem 0;
  .logo {
    img {
      min-height: 4rem;
    }
  }
  h3 {
    font-size: 2.2rem;
    color: var(--color-text-white);
    padding: 1rem 0;
  }
  p {
    font-size: 1.6rem;
    color: var(--color-text-white);
    padding: 1rem 0;
    line-height: 2rem;
  }
`;

const BlockSocialMedia = styledComponents.div`
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.4rem;
  display: flex;
  a {
    min-width: 4.4rem;
    font-size: 2.2rem;
    border-radius: 50%;
    border: 0.2rem solid var(--color-text-white);
    color: var(--color-text-white);
    margin-right: 0.5rem;
    text-align: center;
  }
`;

const styleQuickLink = {
  fontSize: '1.4rem',
  color: 'var(--color-text-white)',
  padding: '1rem 0',
  display: 'block',
  '&:hover': {
    svg: {
      paddingRight: '1rem',
    },
  },
  svg: {
    paddingRight: '0.5rem',
  },
};

const styleFormInput = {
  width: '100%',
  border: '0.2rem solid var(--color-text-white)',
  borderRadius: '4rem',
  background: 'none',
  fontSize: '1.7rem',
  color: 'var(--color-text-white)',
  padding: '0.8rem 2rem',
  marginBottom: '1rem',
};

const Footer = () => (
  <FooterWrapper>
    <BoxContainer>
      <Box>
        <Link to="/" className="logo">
          <img src={logoFooter} alt="logo" />
        </Link>
        <p>My Travel Agency, creando experiencias de viaje desde la capital Inca ...</p>
        <BlockSocialMedia>
          <a href="https://www.linkedin.com/in/popehiflo/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/popehiflo" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/popehiflo/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/popehiflo" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </BlockSocialMedia>
      </Box>
      <Box>
        <h3>Quick Links</h3>
        <Link to="/" style={styleQuickLink}>
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 1
        </Link>
        <Link to="/" style={styleQuickLink}>
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 2
        </Link>
        <Link to="/" style={styleQuickLink}>
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 3
        </Link>
        <Link to="/" style={styleQuickLink}>
          <FontAwesomeIcon icon={faMountainSun} />
          {' '}
          Nav Item 4
        </Link>
        <Link to="/" style={styleQuickLink}>
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 5
        </Link>
      </Box>
      <Box>
        <h3>Contact Us</h3>
        <p>
          <FontAwesomeIcon icon={faMap} />
          {' '}
          Cusco, Perú
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          {' '}
          +51 999 999 999
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          popehiflo@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} />
          {' '}
          Mon - Sat: 8:00 - 16:00
        </p>
      </Box>
      <Box>
        <h3>More information?</h3>
        <p>Subscribe to receive new tours</p>
        <form action="">
          <input type="email" placeholder="your email" style={styleFormInput} />
          <input type="submit" value="subscribe" className="btn-primary" />
        </form>
      </Box>
    </BoxContainer>
  </FooterWrapper>
);

export default Footer;
