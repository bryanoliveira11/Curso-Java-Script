import ConditionalRender from "./components/ConditionalRender";
import Events from "./components/Events";
import EventsWithList from "./components/EventsWithList";
import EventsWithObject from "./components/EventsWithObject";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Objects from "./components/Objects";
import Props from "./components/Props";
import PropsChildren from "./components/PropsChildren";
import StylesIcons from "./components/Styles&Icons";
import Variables from "./components/Variables";

const App = () => {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Variables />
      <Objects />
      <Props textProp="text prop" numberProp={99} />
      <PropsChildren>
        <h1>Props Children</h1>
        <p>children</p>
      </PropsChildren>
      <ConditionalRender isLoggedIn={true} />
      <StylesIcons/> */}
      <Events />
      <EventsWithList />
      <EventsWithObject />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
