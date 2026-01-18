import Navbar from "./components/navbar";
import CartModal from "./components/Cartmodal";
import ProductList from "./components/Productslist";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  // state to store the products
  const [products, setProducts] = useState([]);

  // state to store the cart items
  const [cart, setCart] = useState([]);

  // state to store the Modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // fetch the products from the fake store api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // function to add product to the cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Item is already in the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // function to remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
      />

      <ProductList products={products} addToCart={addToCart} />

      {isCartOpen && (
        <CartModal
          cart={cart}
          closeCart={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
