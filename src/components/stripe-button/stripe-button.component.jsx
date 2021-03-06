import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JsWofBj2BwOTvJO66m6rEtcbJ6NFhoqrT3gO3KTAqlukDKEjdTAgAnxvx1yC7ISiqlqVQWlBEIeiwOuUlwivXSb00PINiX3gv";

  const onToken = (token) => {
    console.log(token);
    alert("payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="http;//svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
