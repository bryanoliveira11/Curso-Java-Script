import Follow from "./components/Follow";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";

function App() {
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="w-[30%]">
          <Follow />
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
    </>
  );
}

export default App;
