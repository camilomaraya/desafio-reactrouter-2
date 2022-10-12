import { NavLink } from "react-router-dom";
import  {Navbar}  from "react-bootstrap";

const NavigationBar = () =>{
  return(
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{background: "#fcbe03"}}
    >
      <Navbar.Brand>
        <img 
          width="100px"
          src="https://static.wikia.nocookie.net/logo-timeline/images/2/21/Pok%C3%A9mon_%28Print%29.svg"
          alt="logo"
        />
      </Navbar.Brand>
      <div className="d-flex links">
        <NavLink end
          className={({isActive}) => (isActive ? "active": undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? "active": undefined)}
          to="/pokemones">
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
    </Navbar>
    )
}

export default NavigationBar;
