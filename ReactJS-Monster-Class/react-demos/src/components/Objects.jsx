export default function Objects() {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: Math.floor(Math.random() * 30) + 20,
      email: "alice@example.com",
    },
    {
      id: 2,
      name: "Bob",
      age: Math.floor(Math.random() * 30) + 20,
      email: "bob@example.com",
    },
    {
      id: 3,
      name: "Charlie",
      age: Math.floor(Math.random() * 30) + 20,
      email: "charlie@example.com",
    },
    {
      id: 4,
      name: "Diana",
      age: Math.floor(Math.random() * 30) + 20,
      email: "diana@example.com",
    },
    {
      id: 5,
      name: "Ethan",
      age: Math.floor(Math.random() * 30) + 20,
      email: "ethan@example.com",
    },
  ];

  return (
    <div>
      <h1>Objects</h1>
      {users.map(({ id, name, age, email }) => (
        <div key={id}>
          <p>
            {name}, {age}, {email}
          </p>
        </div>
      ))}
    </div>
  );
}
