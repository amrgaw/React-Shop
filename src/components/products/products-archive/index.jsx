import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddToCart } from "../../../redux/counterSlice";

export default function ProductsArchive() {
  const [products, setProducts] = useState([]);
  const count = useSelector((state) => state.counter.value);
  const cartList = useSelector((state) => state.counter.cartList);

  const dispatch = useDispatch();
  function addTOCart(id) {
    id = id.target.getAttribute("prod-id");
    let prod;
    products.forEach((e) => {
      if (e.id == id) {
        prod = e;
        prod.count = 1;
      }
    });

    dispatch(AddToCart(prod));
  }

  useEffect(() => {
    GetAllProducts();
  }, []);

  function GetAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }
  return (
    <div className="product-archive container mx-auto gap-3 row  justify-content-around mt-5">
      {products.map((prod) => {
        return (
          <div key={prod.id} className="col-3 card border rounded-4 p-3">
            <div>
              <img className="" src={prod.image} alt="" />
            </div>
            <div>
              <Link
                to={`/product/${prod.id}`}
                className="text-danger text-decloration-none fw-bold card-title"
              >
                {prod.title}
              </Link>

              <p className="">{prod.description}</p>
              <div>
                <div className="d-flex gap-4 align-items-center">
                  {" "}
                  <h4>{prod.price} EGP</h4>
                  <button
                    onClick={(e) => addTOCart(e)}
                    prod-id={prod.id}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
