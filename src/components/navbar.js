function Navbar({cartCount,openCart}){
    return(
        <nav className="navbar">
            <h1>Guvi Shopping site</h1>
            <button onClick={openCart}>cart({cartCount})</button>
        </nav>
    )

}
export default Navbar;