import React from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

interface User {
  name: { first: string; last: string };
  picture: { medium: string };
}

export default function TopSellers() {
  const [authors, setAuthors] = React.useState<Author[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();
        const authorsData: Author[] = data.results.map((user: User) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthor) =>
      prevAuthor.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div
      className="bg-white p-5 mx-5 mt-[6.75rem] border
    border-gray-300 w-[23rem] rounded shadow-sm"
    >
      <h2 className="text-xl mb-5 font-bold">Top Sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[20%] h-[20%] justify-center rounded-full"
              />
              <span className="ml-4">{author.name}</span>
            </section>
            <button
              onClick={() => handleFollowClick(index)}
              className={`btn text-white rounded mr-4 ${
                author.isFollowing ? "bg-red-400" : "bg-neutral"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
