import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const LoginWrapper = styledComponents.section`
  height: 100vh;
  background: var(--color-bg-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormLogin = styledComponents.form`
  background: var(--color-bg-light);
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
  }
  p {
    padding-top: 2rem;
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
      <FormInput type="email" name="" placeholder="enter your email" />
      <FormInput type="password" name="" placeholder="enter your password" />
      <input type="submit" value="Sign In" className="btn-primary" />
      <p>Do not have an account?</p>
      <Link to="/account/sign-up" className="btn-secondary">Sign Up</Link>
    </FormLogin>
  </LoginWrapper>
);

export default SignIn;
