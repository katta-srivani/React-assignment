function CartModal({ cart, closeModal, removeFromCart }) {
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Cart Items</h2>

        {cart.length === 0 && <p>No items in the cart</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-Modal">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}

        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
