/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styledComponents from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import BackpackCard from '../components/BackpackCard';
import { privateRequest } from '../services/request';

const STRIPE = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const BackpackWrapper = styledComponents.section`
  min-height: 70vh;
  padding-top: 8rem;
  .heading {
    div {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const BackpackGrid = styledComponents.div`
  display: ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
`;

const BackpackButtons = styledComponents.div`
  margin-top: 2rem;
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  background: var(--color-bg-white);
  padding: 2rem;
  padding-top: 1rem;
  h3 {
    padding-top: 1rem;
    font-size: 2rem;
    color: var(--color-secondary);
    span {
      color: var(--color-primary);
    }
  }
`;

const Backpack = () => {
  const backpack = useSelector((state) => state.backpack);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await privateRequest.post('/api/payments/pay-stripe', {
          tokenId: stripeToken.id,
          amount: backpack.total * 100,
        });
        navigate('/backpack/success', { state: { data: res.data } });
        console.log(res);
      } catch {
        Navigate('/backpack/error');
      }
    };
    stripeToken && backpack.total >= 1 && makeRequest();
  }, [stripeToken, backpack.total, navigate]);

  return (
    <BackpackWrapper>
      <div className="heading">
        <span>travel backpack with</span>
        <h1>Your selected Tours</h1>
        <div>
          <button className="btn-secondary" type="button">Continue Choosing</button>
          <button className="btn-primary" type="button">Request a Quote</button>
        </div>
      </div>
      <BackpackGrid>
        {backpack.tours.map((item) => (
          <BackpackCard item={item} />
        ))}
      </BackpackGrid>
      {backpack.tours.length > 0 && (
      <BackpackButtons>
        <h3>
          {'subtotal : '}
          <span>
            {
              backpack.tours.reduce((acc, curr) => acc + curr.price, 0)
            }
          </span>
        </h3>
        <h3>
          discount:
          <span>{' $ 0'}</span>
        </h3>
        <h3>
          TOTAL:
          <span>{` $ ${backpack.total}`}</span>
        </h3>
        <Link to="/" className="btn-primary">Request a Quote</Link>
        <StripeCheckout
          name="My Travel Agency by popehiflo"
          image="https://i.ibb.co/JHQxTt4/logo.png"
          billingAddress
          shippingAddress
          description={`Your total is $${backpack.total}`}
          amount={backpack.total * 100}
          token={onToken}
          stripeKey={STRIPE}
          panelLabel="Pay Now"
        >
          <button type="button" to="/" className="btn-primary">Checkout Now</button>
        </StripeCheckout>
      </BackpackButtons>
      )}
    </BackpackWrapper>
  );
};

export default Backpack;
