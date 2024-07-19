import React from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
import thanks from "../assets/thankyou.jfif"

const Checkout = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="checkout wow animate__animated animate__flipInX">
            <h2>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total}</p>
                    <img src={thanks} alt="" />
                    <button>Complete Purchase</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
