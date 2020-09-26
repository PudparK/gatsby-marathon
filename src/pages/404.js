/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

//Components
import Container from "components/Container"
import Button from "components/Button"
import Logo from "components/Logo"

export default () => {
  return (
    <Container>
      <div className="four-o-four">
        <Logo />
        <h2 sx={{ color: "primary", fontSize: 4, fontWeight: "bold" }}>404</h2>
        <h1 sx={{ color: "secondary", fontSize: 8, fontWeight: "bold" }}>
          Oops!
        </h1>
        <p sx={{ color: "lightgray", fontSize: 2 }}>
          We can't seem to find the page you're looking for.
        </p>
        <Link to="/">
          <Button text="Head to the home page" />
        </Link>
      </div>
    </Container>
  )
}
