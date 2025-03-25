import React from "react";
import { useBlogs } from "../shared/Context";
import { Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = React.useState(existingBlog?.title || "");
  const [description, setDescription] = React.useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = React.useState(existingBlog?.image || "");
  const [time, setTime] = React.useState(existingBlog?.time || "");

  React.useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }

    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold mb-2 text-gray-800 text-xl">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          className="block w-full px-4 py-2 border border-gray-300
          rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="block w-full px-4 py-2 border border-gray-300 resize-y
          rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="block w-full px-4 py-2 border border-gray-300
          rounded-lg shadow-sm focus:outline-none focus:ring-2
          focus:ring-black"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-6 space-x-4">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg
        font-semibold shadow-sm hover:bg-blue-800 focus:outline-none
        focus:ring-2 focus:ring-black cursor-pointer"
          onClick={handleSubmit}
        >
          {existingBlog ? "Update" : "Add"}
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-lg
        font-semibold shadow-sm hover:bg-gray-600 focus:outline-none
        focus:ring-2 focus:ring-gray-500 cursor-pointer"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
