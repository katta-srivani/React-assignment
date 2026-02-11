import Navbar from "./components/navbar";
import CartModal from "./components/Cartmodal";
import ProductList from "./components/Productslist";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Store products
  const [products, setProducts] = useState([]);

  // Store cart items
  const [cart, setCart] = useState([]);

  // Control modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      alert("Item already in cart");
    } else {
      setCart((prev) => [...prev, product]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
      />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      {/* ✅ IMPORTANT: Conditional Rendering */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
