function Productcard({product, addToCart}){
    return(
        <div className="card">
            {/* display the prodict image*/}
            <img src={product.image} />
            {/* product title*/}
            <h4>{product.title}</h4>
            <p>Rs.{product.price}</p>
            {/*add to cart button*/}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )

}
export default Productcard;