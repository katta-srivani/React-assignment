import ProductCard from "./Productcard";

function Productslist({ products, addToCart }) {
  return (
    <div className="product-grid">
      {/* Loop through the products */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Productslist;
