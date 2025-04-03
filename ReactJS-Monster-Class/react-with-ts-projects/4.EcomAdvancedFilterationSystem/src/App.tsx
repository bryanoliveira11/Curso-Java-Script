import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import ProductPage from "./components/Product/ProductPage";
import TopSellers from "./components/MainContent/TopSellers";
import PopularBlogs from "./components/MainContent/PopularBlogs";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
