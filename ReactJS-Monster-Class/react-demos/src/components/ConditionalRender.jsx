export default function ConditionalRender({isLoggedIn}) {
  return (
    <div>
      <h1>Conditional Render</h1>
      {isLoggedIn ? <p>Logged</p> : <p>Not Logged</p>}
    </div>
  )
}
