import "./Products.css";
import data from "../../db/data";
import Card from "../Card";

export default function Products() {
  const items = data.map((item) => {
    return (
      <section className="card" key={Math.random()}>
        <Card item={item} />
      </section>
    );
  });

  return (
    <>
      <section className="card-container">{items}</section>
    </>
  );
}
