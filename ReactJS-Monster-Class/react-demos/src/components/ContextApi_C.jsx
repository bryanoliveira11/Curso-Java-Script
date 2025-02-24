import { Data, Data2 } from "../App"

export default function ContextApi_C() {
  return (
    // <Data.Consumer>
    //   {value => <h1>{value}</h1>}
    // </Data.Consumer>
    <Data2.Consumer>
        {value => <h1>{value}</h1>}
    </Data2.Consumer>
  )
}
