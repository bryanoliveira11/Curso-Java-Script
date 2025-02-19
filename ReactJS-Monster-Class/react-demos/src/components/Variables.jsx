export default function Variables() {
  const variable = "im a variable";
  const date = new Date().toLocaleString();
  const product = {
    name: "product",
    price: 10.99,
    availability: true,
  };

  return (
    <main>
      <h1>Variables</h1>
      <p>{variable}</p>
      <p>today is : {date}</p>
      <div>
        <p>Object data</p>
        <ul>
          <li>{product.name}</li>
          <li>$ {product.price}</li>
          <li>{product.availability ? "True" : "False"}</li>
        </ul>
      </div>
    </main>
  );
}
