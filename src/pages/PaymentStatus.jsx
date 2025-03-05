import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('processing');

    useEffect(() => {
        const checkPaymentStatus = async () => {
            try {
                const orderId = searchParams.get('order_id');
                const paymentStatus = searchParams.get('payment_status');

                if (paymentStatus === 'SUCCESS') {
                    setStatus('success');
                    // Clear cart and order details from localStorage
                    localStorage.removeItem('cartItems');
                    localStorage.removeItem('orderId');
                } else if (paymentStatus === 'FAILED') {
                    setStatus('failed');
                } else {
                    setStatus('pending');
                }
            } catch (error) {
                console.error('Error checking payment status:', error);
                setStatus('error');
            }
        };

        checkPaymentStatus();
    }, [searchParams]);

    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <>
                        <div style={{ fontSize: '60px', color: '#28a745', marginBottom: '20px' }}>✓</div>
                        <h2 style={{ color: '#28a745' }}>Payment Successful!</h2>
                        <p>Your order has been confirmed.</p>
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Continue Shopping
                        </button>
                    </>
                );
            case 'failed':
                return (
                    <>
                        <div style={{ fontSize: '60px', color: '#dc3545', marginBottom: '20px' }}>×</div>
                        <h2 style={{ color: '#dc3545' }}>Payment Failed</h2>
                        <p>Your payment was unsuccessful. Please try again.</p>
                        <button
                            onClick={() => navigate('/checkout')}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Try Again
                        </button>
                    </>
                );
            default:
                return <div>Processing payment status...</div>;
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: '20px',
            textAlign: 'center'
        }}>
            {renderContent()}
        </div>
    );
};

export default PaymentStatus; 