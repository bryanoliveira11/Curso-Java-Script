import { FaCopy, FaEdit } from "react-icons/fa";
import { Blog } from "../types";
import { FaDeleteLeft } from "react-icons/fa6";
import { useBlogs } from "../shared/Context";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

export default function ArticleCard({
  article,
  onDelete,
  onEdit,
}: ArticleCardProps) {
  const { addBlog } = useBlogs();

  return (
    <div
      className="flex p-4 bg-white w-[40rem] mb-6 ml-[2rem]
  shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-36 h-24
        object-cover rounded-lg shadow-md "
      />

      <div className="ml-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-700 flex-1">{article.description}</p>
        <div className="flex items-center justify-between mt-4 text-gray-600">
          <span className="text-sm">{article.time}</span>
          <div className="flex space-x-3">
            <FaCopy
              className="text-gray-500 hover:text-gray-700
            transition-colors duration-200 cursor-pointer"
              onClick={() => {
                const blog = { ...article, id: Date.now() };
                addBlog(blog);
              }}
            />
            <FaEdit
              className="text-blue-500 hover:text-blue-600
            transition-colors duration-200 cursor-pointer"
              onClick={onEdit}
            />
            <FaDeleteLeft
              className="text-red-500 hover:text-red-600
            transition-colors duration-200 cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
