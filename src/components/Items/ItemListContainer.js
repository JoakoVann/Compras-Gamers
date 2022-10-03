import './listCont.css';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
// import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/products';


const ItemListContainer = ({greeting}) => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((datos) => {setProducts(datos)})
      .catch((error) => console.warn(error));
  }, []);

  return ( 
    <Container>
      <h1 className="tit">Productos</h1>
      <h3 className="greet">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}

export default ItemListContainer;