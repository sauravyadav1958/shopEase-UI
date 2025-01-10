import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CheckoutForm from './CheckoutPayment';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/features/common';
import { fetchUserDetails } from '../../api/userInfo';
import { selectCartItems } from '../../store/features/cart';

const stripePublishableKey = process.env.STRIPE_KEY || '';
//Publishable Key
// TODO have given random string here, will replace it with actual key later
const stripePromise = loadStripe('stripePublishableKey');

const PaymentPage = (props) => {

    const options = {
        mode: 'payment',
        amount: 100,
        currency: 'inr',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'flat'
        },
      };
  return (
    <div>
       {/* makes Stripe object available throughout the component tree. */}
        <Elements stripe={stripePromise} options={options}>
             <CheckoutForm {...props}/>   
        </Elements>
    </div>
  )
}

export default PaymentPage