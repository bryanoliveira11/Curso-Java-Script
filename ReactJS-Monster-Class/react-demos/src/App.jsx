import ConditionalRender from "./components/ConditionalRender";
import ContextApi_A from "./components/ContextApi_A";
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
import Effect from "./components/useEffect";
import Variables from "./components/Variables";
import { createContext } from "react";

export const Data = createContext();
export const Data2 = createContext();

const App = () => {
  const context = "Context Data 1";
  const context2 = "Context Data 2";

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
      {/* <Events />
      <EventsWithList />
      <EventsWithObject /> */}
      {/* <Effect /> */}
      <Data.Provider value={context}>
        <Data2.Provider value={context2}>
          <ContextApi_A />
        </Data2.Provider>
      </Data.Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
