import { useDispatch, useSelector } from "react-redux";
import { decrement, DelProduct, increment } from "../../redux/counterSlice";

export default function Cart() {
  const cartProducts = useSelector((state) => state.counter.cartList);
  const dispatch = useDispatch();

  function delProduct(e) {
    let id = e.target.getAttribute("prod-id");
    console.log(id);
    dispatch(DelProduct(id));
  }
  
  function increaseProduct(e) {
    let id = e.target.getAttribute("prod-id");
    console.log(id);
    dispatch(increment(id));
  }

  function decreaseProduct(id) {
    dispatch(decrement(id));
  }
  
  

  return (
    <div>
      <h1 className="text-center fw-bold mt-5 mb-4">Cart Products</h1>
      <div className="wrapper container row mx-auto">
        <div className="products col-7 mx-auto">
          {cartProducts.map((e) => {
            return (
              <div
                key={e.id}
                className="row border rounded-3 p-3 mb-2 align-items-center justify-content-between"
              >
                <img className="col-2" src={e.image} alt="" />
                <h5 className=" col-4">{e.title}</h5>
                <h5 className="col-1">{e.price}</h5>
                <div className="d-flex gap-3 col-2 align-items-center ms-2 me-5">
                  <button disabled={e.count <=1} prod-id={e.id}  onClick={() => decreaseProduct(e.id)} className="btn btn-primary">
                    -
                  </button>
                  {e.count}
                  <button prod-id={e.id}  onClick={(e) => increaseProduct(e)} className="btn btn-primary">
                    +
                  </button>
                </div>
                <button
                  prod-id={e.id}
                  onClick={(e) => delProduct(e)}
                  className="btn btn-primary  col-2"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="totalDetails d-flex-column col-3 border p-3">
          <h3>Total Details</h3>
          <hr />
          <h4>Items: {cartProducts.reduce((e, b) => e + b.count, 0)}</h4>
          <hr />
          <h4>
            Total Price: 
            {cartProducts.reduce((e, b) => (e + b.count * b.price), 0).toFixed(2)} EGP
          </h4>
        </div>
      </div>
    </div>
  );
}
