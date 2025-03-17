import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({ item }) {
  return (
    <>
      <img src={item.img} alt={item.title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{item.title}</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">{item.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{item.prevPrice}</del> {item.newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </>
  );
}
