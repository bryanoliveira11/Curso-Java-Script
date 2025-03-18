import "./Products.css";

export default function Products({data}) {
  return (
    <>
      <section className="card-container">{data}</section>
    </>
  );
}
