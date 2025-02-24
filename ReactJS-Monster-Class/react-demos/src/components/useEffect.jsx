import { useEffect, useState } from "react";

export default function Effect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      
      if(data && data.length) {
        setData(data);
      }
    };
    fetchData();
  }, []);

  return <div>
    <h1>UseEffect</h1>
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>ID : {item.id}</h1>
          <h2>Title: {item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  </div>;
}
