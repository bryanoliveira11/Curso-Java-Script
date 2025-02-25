import { useContext } from "react"
import { Data, Data2 } from "../App"

export default function ContextApi_C() {
  const contextData = useContext(Data)
  const contextData2 = useContext(Data2)

  return (
    // <Data.Consumer>
    //   {value => <h1>{value}</h1>}
    // </Data.Consumer>
    <div>
      <h1>{contextData}</h1>
      <h1>{contextData2}</h1>
    </div>
  )
}
