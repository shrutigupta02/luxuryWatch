import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watches from './pages/Watches';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ShippingPage from './pages/ShippingPage';
import WatchList from './pages/WatchList';
import WatchDetail from './pages/WatchDetail';
import { CartProvider } from './context/CartContext';
import Payments from './pages/Payments';
import PaymentStatus from './pages/PaymentStatus';
import Payment from './pages/Payment';
// ... other imports ...

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="App">
          <nav>
            {/* Your navigation components */}
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/watch/:id" element={<WatchDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
            <Route path="/payment" element={<Payment />} />

            {/* ... other routes ... */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 