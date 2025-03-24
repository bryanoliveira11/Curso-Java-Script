import Follow from "./components/Follow"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <Nav/>
      <div className="flex justify-center">
        <div className="w-[30%]"><Follow/></div>
      </div>
    </>
  )
}

export default App
