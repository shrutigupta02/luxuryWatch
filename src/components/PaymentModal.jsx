import { useState } from 'react';
import { useCart } from '../context/CartContext';

const PaymentModal = ({ isOpen, onClose, orderDetails }) => {
  const { cartItems } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingTotal = cartItems.length > 0 
      ? Math.max(...cartItems.map(item => item.shippingCharge))
      : 0;
    return subtotal + shippingTotal;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const orderId = localStorage.getItem('orderId');
      const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails'));

      const response = await fetch('http://localhost:3001/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          customerDetails: shippingDetails,
          amount: calculateTotal()
        })
      });

      const data = await response.json();

      if (data.success && data.paymentLink) {
        window.location.href = data.paymentLink;
      } else {
        throw new Error(data.error || 'Failed to initialize payment');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setError('Failed to process payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <h2 style={{ margin: 0 }}>Payment Details</h2>
          <button 
            onClick={onClose}
            style={{
              border: 'none',
              background: 'none',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Order Summary</h3>
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            padding: '15px',
            marginBottom: '20px'
          }}>
            {cartItems.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span>{item.title} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div style={{ 
              borderTop: '1px solid #ddd', 
              marginTop: '10px', 
              paddingTop: '10px',
              fontWeight: 'bold'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Total Amount:</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>
          </div>

          {error && (
            <div style={{
              color: '#dc3545',
              padding: '10px',
              marginBottom: '15px',
              backgroundColor: '#ffe6e6',
              borderRadius: '4px'
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            style={{
              width: '100%',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '15px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              opacity: isProcessing ? 0.7 : 1
            }}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>

          <div style={{ 
            marginTop: '15px', 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: '#666' 
          }}>
            <p>You will be redirected to Cashfree's secure payment gateway</p>
            <img 
              src="/cashfree-logo.png" 
              alt="Cashfree Secure" 
              style={{ height: '30px', marginTop: '10px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 