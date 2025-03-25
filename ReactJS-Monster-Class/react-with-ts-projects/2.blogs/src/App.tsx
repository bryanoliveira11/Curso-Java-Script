import { IoMdAddCircle } from "react-icons/io";
import Follow from "./components/Follow";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./shared/Context";
import React from "react";
import { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingBlog, setEditingBlog] = React.useState<Blog | null>(null);

  const openNewBlogModal = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <>
      <BlogProvider>
        <Nav />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                className="ml-[7rem] bg-black flex justify-center
              items-center text-white px-4 py-2 rounded-full mb-4
              cursor-pointer hover:bg-gray-900"
                onClick={openNewBlogModal}
              >
                Add New Blog <IoMdAddCircle className="ml-[0.5rem]" />
              </button> 

              <ArticleList onEdit={openModalForEdit}/>

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setIsModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <Follow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </>
  );
}

export default App;
