import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Item"
            className="card-image"
          />
          <div className="card-details">
            <h3 className="card-title">Item 1</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star"/>
              <AiFillStar className="rating-star"/>
              <AiFillStar className="rating-star"/>
              <AiFillStar className="rating-star"/>
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del> $200
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon"/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
