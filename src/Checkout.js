import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user ? user?.displayName : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket?.length === 0 ? (
            <>
              <img
                className="checkout__defaultImg"
                src="https://icons.iconarchive.com/icons/archigraphs/christmas/512/Present-icon.png"
                alt="Loading.."
              />
            </>
          ) : (
            <></>
          )}

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
