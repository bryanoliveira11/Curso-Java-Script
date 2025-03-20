export default function Posts() {
  const posts = Array.from({ length: 100000 }, (_, i) => `Post ${i + 1}`);

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>{post}</div>
      ))}
    </div>
  );
}
