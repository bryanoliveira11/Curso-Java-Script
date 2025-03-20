import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Posts from "./components/Posts";

function App() {
  const [activeTab, setActiveTab] = React.useState("home");
  const [isPending, startTransition] = React.useTransition();

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "contact":
        return <Contact />;
      case "posts":
        return <Posts />;
      default:
        return <Home />;
    }
  };

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  }

  return (
    <>
      <div className="tabs">
        <button className="border-2 p-4" onClick={() => handleTabChange("home")}>
          Home
        </button>
        <button
          className="border-2 p-4"
          onClick={() => handleTabChange("contact")}
        >
          Contact
        </button>
        <button className="border-2 p-4" onClick={() => handleTabChange("posts")}>
          Posts
        </button>
      </div>

      {isPending && <h1>Loading...</h1>}

      <div className="content">{renderContent()}</div>
    </>
  );
}

export default App;
