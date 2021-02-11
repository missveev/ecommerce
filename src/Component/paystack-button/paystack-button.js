import React from "react";
import {PaystackButton} from 'react-paystack';

const PayButton = ({price}) => {
    const publishableKey = 'pk_test_8946829926ccc7cd2184171c624175ae4b8cf510';
   const email= "vivianpamilerin@gmail.com";
   const priceForPaystack = price *100;
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <PaystackButton
            text='Pay Now'
            email={email}
            amount={priceForPaystack}
            className="payButton"
            name='MissVeev- Commerce'
            billingAddress
            ShippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is N${price}`}
            panelLable='Pay Now'
            token={onToken}
            publicKey={publishableKey}
            tag="button"
        />
    );
};
export default PayButton;