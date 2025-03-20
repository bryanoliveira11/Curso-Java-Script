import React from "react";

export default function FetchTodoWithoutUse() {
  const [todo, setTodo] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await res.json();
        setTodo(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div><h1>{todo.title}</h1></div>;
}
