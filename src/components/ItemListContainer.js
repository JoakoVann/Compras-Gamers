import './listCont.css';

const ItemListContainer = ({greeting}) => {
  return ( 
    <>
      <h1 className="tit">Productos</h1>
      <h3 className="greet">{greeting}</h3>
    </>
  );
}

export default ItemListContainer;