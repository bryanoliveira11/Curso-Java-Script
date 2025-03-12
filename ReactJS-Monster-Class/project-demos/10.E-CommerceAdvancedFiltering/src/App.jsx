import Nav from "./components/Navigation/Nav"; 
import Products from "./components/Products/Products";  
import Recommended from "./components/Recommended/Recommended";  
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </>
  );
}

export default App;
