import './cards.css';

function Cards() {
    return (<div className='contenedor-principal'>
        <div className="cards">
          <img className="card-img card-img-top" src="https://res.cloudinary.com/dxbla0y6o/image/upload/v1669735364/REACT%20-%20LIMONERO/producto-1_lb7xen.jpg" alt="Muñequitos de Apego"/>
          <div className="card-body">
            <h5 className="card-title">Muñequitos de Apego</h5>
            <p className="card-text texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary boton-uno">Agregar al Carrito</a>
          </div>
        </div>

        <div className="cards">
          <img className="card-img card-img-top" src="https://res.cloudinary.com/dxbla0y6o/image/upload/v1669735371/REACT%20-%20LIMONERO/producto-2_y8wdyq.jpg" alt="Muñequitos de Apego"/>
          <div className="card-body">
            <h5 className="card-title">Muñequitos de Apego</h5>
            <p className="card-text texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary boton-uno">Agregar al Carrito</a>
          </div>
        </div>

        <div className="cards">
          <img className="card-img card-img-top" src="https://res.cloudinary.com/dxbla0y6o/image/upload/v1669735362/REACT%20-%20LIMONERO/producto-3_vp4pyc.jpg" alt="Muñequitos de Apego"/>
          <div className="card-body">
            <h5 className="card-title">Muñequitos de Apego</h5>
            <p className="card-text texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary boton-uno">Agregar al Carrito</a>
          </div>
        </div>

        <div className="cards">
          <img className="card-img card-img-top" src="https://res.cloudinary.com/dxbla0y6o/image/upload/v1669735360/REACT%20-%20LIMONERO/producto-4_cijisp.jpg" alt="Muñequitos de Apego"/>
          <div className="card-body">
            <h5 className="card-title">Muñequitos de Apego</h5>
            <p className="card-text texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary boton-uno">Agregar al Carrito</a>
          </div>
        </div>

      </div>
    );
}
  
export default Cards;
  