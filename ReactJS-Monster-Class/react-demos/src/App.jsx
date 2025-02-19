import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Objects from "./components/Objects";
import Props from "./components/Props";
import Variables from "./components/Variables";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Variables />
      <Objects />
      <Props textProp="text prop" numberProp={99}/>
      <Footer />
    </div>
  );
};

export default App;
