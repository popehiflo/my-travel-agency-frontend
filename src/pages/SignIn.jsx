import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import imgDefault from '../assets/imgs/default-image-urubamba.jpg';

const LoginWrapper = styledComponents.section`
  height: 100vh;
  background: url(${imgDefault}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormLogin = styledComponents.form`
  background: rgba(255, 255, 255, 0.7);
  max-width: 40rem;
  border-radius: var(--border-radius);
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  padding: 2rem;
  h3 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    color: var(--color-secondary);
  }
  .btn-primary {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    color: var(--color-secondary);
    text-align: center;
    padding-bottom: 2rem;
  }
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
`;

const FormInput = styledComponents.input`
  width: 100%;
  border: var(--border-primary);
  border-radius: var(--border-radius-btn-primary);
  background: var(--color-bg-white);
  font-size: 1.7rem;
  margin: 0 0 2rem 0;
  color: var(--color-secondary);
  padding: 1rem 2rem;
`;

const SignIn = () => (
  <LoginWrapper>
    <FormLogin>
      <h3>Sign In</h3>
      <Link to="/" className="btn-primary">
        <FontAwesomeIcon icon={faGoogle} />
        {' Sign In with Google'}
      </Link>
      <hr style={{ border: '0.2rem solid var(--color-secondary)', margingBottom: '1rem' }} />
      <p>Or</p>
      <FormInput type="email" name="" placeholder="enter your email" />
      <FormInput type="password" name="" placeholder="enter your password" />
      <input type="submit" value="Sign In" className="btn-primary" />
      <p>Do not have an account?</p>
      <Link to="/account/sign-up" className="btn-secondary">Sign Up</Link>
    </FormLogin>
  </LoginWrapper>
);

export default SignIn;
