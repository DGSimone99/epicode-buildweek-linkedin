import { useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

import { fetchGetPost, fetchUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";

const NavLavoro = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGetPost());
  }, [dispatch]);

  return (
    <Navbar
      id="navbar"
      bg="white"
      expand="lg"
      className="px-3 shadow-sm container-fluid sticky-top justify-content-between border-top "
      style={{ top: "60px" }}
    >
      <Nav className="d-flex align-items-center justify-content-between  w-100 ">
        <NavLink className={`d-flex align-items-center nav-link mx-4 pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAHzpg-xWkZIMSTKjhrg9aabRmw.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Per te</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALxe-13i08oISNC0LL0E8rOjbQ.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Ibrido</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAGP4rUyqs0gcQHyq-AxUoT9SVg.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Candidatura semplice</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALXOZ_PEtcJLSEqdUt9ZET7yeA.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Industria manifatturiera</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAACmG4H52GI2ESsex3aFZtqIX4g.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>HR</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link pointer2`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAMjG8APRYp3UQiKGJ2V0tTioaA.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Part time</p>
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavLavoro;
