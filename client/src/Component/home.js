import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RailwayCollieService = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const buyNow = () => {
    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      text: 'Your booking has been confirmed. Thank you!',
    }).then(() => {
      clearCart();
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Railway Collie Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service cards */}
        {/* Service card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
          <img src="https://c8.alamy.com/comp/BE8JHM/porter-carrying-luggage-at-the-railway-station-in-hyderabad-india-BE8JHM.jpg" alt="Express Delivery" className="w-64 h-60 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Express Service</h2>
          <p>Economy Service</p>
          <button
            onClick={() => addToCart({ name: 'Express Delivery', price: 20 })}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
        {/* Service card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJCLIcx-NiMpYViFsR637F_W_bHF8DI242tF9jQz8kU0OQ5g_OF0_Y14bu4A1qH0IFE&usqp=CAU" alt="Standard Delivery" className="w-64 h-60 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Standard Service</h2>
          <p>Standard Service</p>
          <button
            onClick={() => addToCart({ name: 'Standard Delivery', price: 10 })}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
        {/* Service card 3 */}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJCLIcx-NiMpYViFsR637F_W_bHF8DI242tF9jQz8kU0OQ5g_OF0_Y14bu4A1qH0IFE&usqp=CAU" alt="Premium Delivery" className="w-64 h-60 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Premium Service</h2>
          <p>Premium Service</p>
          <button
            onClick={() => addToCart({ name: 'Premium Delivery', price: 30 })}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Cart section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">${total}</span>
        </div>
        <button
          onClick={buyNow}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default RailwayCollieService;
