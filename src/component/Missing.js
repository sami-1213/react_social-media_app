import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <main className="Missing">
      <h1>404 Page not found!</h1>
      <p>Well that's dissapointing 😞</p>
      <p>Visit our <span><Link to="/">Homepage</Link></span></p>
    </main>
  )
}
export default Missing