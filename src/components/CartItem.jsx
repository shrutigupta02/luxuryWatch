import { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div style={{
      display: "flex",
      padding: "20px",
      borderBottom: "1px solid #eee",
      gap: "20px",
      alignItems: "center"
    }}>
      <img 
        src={item.image} 
        alt={item.title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{item.title}</h3>
        <p style={{ color: "#666", marginBottom: "5px" }}>Price: ₹{item.price}</p>
        <p style={{ color: "#666", marginBottom: "10px" }}>Shipping: ₹{item.shippingCharge}</p>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            style={{
              padding: "5px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff",
              cursor: "pointer"
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            style={{
              padding: "5px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff",
              cursor: "pointer"
            }}
          >
            +
          </button>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
          ₹{(item.price * quantity) + item.shippingCharge}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;