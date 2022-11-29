import '../App.css';
import CartWidget from './CartWidget';

const Navbar = () =>{
    return <div>
      <nav className='navbar navbar-expand-lg navbar-light sticky-top nav-style'>
        <div>
          <a className="navbar-brand" href="index.html">
            <img src='https://res.cloudinary.com/dvg9bxeas/image/upload/v1669666949/REACT%20-%20Limonero/logo_ljpgru.png' alt="Logo Limonero"/>
          </a>  
        </div>
        <div>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Nosotras</a>  
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Nuestros Productos</a>  
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'> Contacto</a>  
            </li>
          </ul>
               
        </div>
        <CartWidget/>
      </nav>
       
    </div>
};

export default Navbar;