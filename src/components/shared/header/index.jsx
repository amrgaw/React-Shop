import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header(params) {
  const count = useSelector((state) => state.counter.value);

  return (
    <nav
      className=" bg-secondary
    "
    >
      <div className="header p-2 container d-flex justify-content-between text-white align-items-center fw-bold fs-4 p-1 ">
        <Link to="/" className=" text-decoration-none">
          <p className="mb-0">Market</p>
        </Link>
        <link rel="stylesheet" href="" />
        <ul className="d-flex mb-0 gap-4">
          <li>
            <Link to="/register" className=" text-decoration-none">
              <p>Register</p>
            </Link>
          </li>
          <li>
            <Link to="/about-us" className=" text-decoration-none">
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className=" text-decoration-none">
              <p>Contact Us</p>
            </Link>
          </li>
          <li className="d-flex gap-2">
            <Link to="/cart" className=" text-decoration-none">
              <p>Cart</p>
            </Link>
            <p className="text-white cart-counter">{count}</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
