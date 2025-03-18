import { useState } from "react";
import Nav from "./components/Navigation/Nav";
import Card from "./components/Card";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/data";
import "./index.css";

function App() {
  // input filter
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItemsByTitle = data.filter(
    (item) =>
      item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // radio filter
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredItems = data;

    // filtering by input (search bar)
    if (query) {
      filteredItems = filteredItemsByTitle;
    }

    // filtering by selected filter
    if (selected) {
      filteredItems = filteredItems.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredItems.map(({ img, title, reviews, prevPrice, newPrice }) => (
      <div className="card" key={Math.random()}>
        <Card
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      </div>
    ));
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products data={result} />
    </>
  );
}

export default App;
