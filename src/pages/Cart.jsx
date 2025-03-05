import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingTotal = cartItems.reduce((total, item) => total + item.shippingCharge, 0);
  const total = subtotal + shippingTotal;

  if (!cartItems || cartItems.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        margin: '20px'
      }}>
        <h2>Your cart is empty</h2>
        <button 
          onClick={() => navigate('/watches')}
          style={{
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1>Shopping Cart ({cartItems.length} items)</h1>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to empty your cart?')) {
              clearCart();
            }
          }}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Clear Cart
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div style={{
          backgroundColor: '#f8f8f8',
          padding: '20px',
          borderRadius: '8px',
          height: 'fit-content'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Order Summary</h2>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Shipping:</span>
              <span>₹{shippingTotal}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              borderTop: '1px solid #ddd',
              paddingTop: '15px',
              fontWeight: 'bold'
            }}>
              <span>Total:</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 