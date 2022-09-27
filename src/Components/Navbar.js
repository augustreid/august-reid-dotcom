import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <p>About</p>
      </Link>
      <Link to={"/projects"}>
        <p>Projects</p>
      </Link>
      <Link to={"/contact"}>
        <p>Contact</p>
      </Link>
      <Link to={"/blog"}>
        <p>Blog</p>
      </Link>
    </nav>
  )
}



export default Navbar;