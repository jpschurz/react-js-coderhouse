import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Counter from "../Counter";

const CardDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const getProductos = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
      setLoading(false);
    } catch (error) {
      setProducto(null);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  if (!producto) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" height="250" />
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      <p>{producto.category}</p>
      <Counter count={count} setCount={setCount} />
    </div>
    </>
  );
};

export default CardDetail;