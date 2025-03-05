import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import WatchDetail from "./pages/WatchDetail";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watches" element={<WatchList />} />
            <Route path="/watch/:id" element={<WatchDetail />} />
            <Route path="/About" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
