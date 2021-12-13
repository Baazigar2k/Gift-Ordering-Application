import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import db from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(new Date().getTime().toString())
      .set({
        basket: basket,
        created: new Date().toLocaleString(),
        amount: getBasketTotal(basket),
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    history("/orders", { replace: true });
  };

  // const handleSubmit = async (event) => {
  //   // do all the fancy stripe stuff...
  //   event.preventDefault();
  //   setProcessing(true);

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       // paymentIntent = payment confirmation

  //       db.collection("users")
  //         .doc(user?.uid)
  //         .collection("orders")
  //         .doc(paymentIntent?.id)
  //         .set({
  //           basket: basket,
  //           amount: paymentIntent?.amount,
  //           created: paymentIntent?.created,
  //         });

  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);

  //       dispatch({
  //         type: "EMPTY_BASKET",
  //       });

  //       history("/orders", { replace: true });
  //     });
  // };

  // const handleChange = (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout (<Link to="/checkout"> {basket?.length} items </Link>)
        </h2>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {user ? (
              <>
                <p>{user?.email}</p>
                <p>B-303 Dutt Avenue</p>
                <p>Science City, Ahmedabad</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}

        <div className="move__right">
          <h2 className="payment__tot">
            Total : <span>{getBasketTotal(basket)}</span>
          </h2>
          <button
            onClick={handleSubmit}
            className="payment__btn"
            disabled={!user ? true : false}
          >
            Place An Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
