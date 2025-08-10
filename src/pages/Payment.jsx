import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initializePayment = async () => {
            try {
                const orderId = localStorage.getItem('orderId');
                const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails'));

                if (!orderId || !shippingDetails) {
                    throw new Error('Order details not found');
                }

                const response = await fetch('http://localhost:3001/api/create-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderId,
                        customerDetails: shippingDetails
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
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        initializePayment();
    }, [navigate]);

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '60vh' 
            }}>
                <div>Initializing payment...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '60vh' 
            }}>
                <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
                <button
                    onClick={() => navigate('/checkout')}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Back to Checkout
                </button>
            </div>
        );
    }

    return null;
};

export default Payment; 