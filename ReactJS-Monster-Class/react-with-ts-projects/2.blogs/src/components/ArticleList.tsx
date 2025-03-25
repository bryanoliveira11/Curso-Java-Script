import { useBlogs } from "../shared/Context";
import { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

export default function ArticleList({ onEdit }: ArticleListProps) {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
}
