import './CartWidget.css';

const CartWidget = () => {
    return (<div className="carrito-widget">
        <img className="cart-icono" src="https://res.cloudinary.com/dvg9bxeas/image/upload/v1669666943/REACT%20-%20Limonero/carrito_wng4az.png" alt="carrito"/>
        <p className="numero-cart">3</p>
    </div>)

};

export default CartWidget;