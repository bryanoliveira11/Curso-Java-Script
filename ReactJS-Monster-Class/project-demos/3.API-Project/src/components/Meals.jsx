import axios from "axios";
import { useEffect, useState } from "react";

export default function Meals() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    return response;
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
}
