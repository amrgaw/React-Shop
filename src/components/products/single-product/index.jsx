import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Params } from "react-router-dom";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    GetProduct();
  }, []);

  function GetProduct() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }
  return (
    <div className="row single-product border p-3 rounded-4 container mx-auto mt-5 gap-4">
      <div className="col-2 border-end ">
        <img src={product.image} alt="" srcset="" />
      </div>
      <div className="col-6 pt-4 text">
        <h2>{product.title}</h2>

        <p>{product.description}</p>
        <h3>{product.price} EGP</h3>
      </div>
    </div>
  );
}
