import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  Dropdown,
  InputGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
  CompassFill,
  FileEarmarkBarGraphFill,
  LaptopFill,
  InfoCircleFill,
  Bullseye,
  PlayBtnFill,
  GeoAltFill,
} from "react-bootstrap-icons";

import { fetchGetPost, fetchJobs, fetchUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router";
import { BsFillSlashSquareFill } from "react-icons/bs";

const NavLavoro = () => {
  const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGetPost());
  }, [dispatch]);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchJobs(query));
    }
  };

  return (
    <Navbar
      id="navbar"
      bg="white"
      expand="lg"
      className="px-3 shadow-sm container-fluid sticky-top justify-content-between border-top "
      style={{ top: "60px" }}
    >
      <Nav className="d-flex align-items-center justify-content-between  w-100 ">
        <NavLink className={`d-flex align-items-center nav-link mx-4`}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAHzpg-xWkZIMSTKjhrg9aabRmw.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Per te</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link `}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALxe-13i08oISNC0LL0E8rOjbQ.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Ibrido</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link `}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAGP4rUyqs0gcQHyq-AxUoT9SVg.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Candidatura semplice</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link `}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALXOZ_PEtcJLSEqdUt9ZET7yeA.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>Industria manifatturiera</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link `}>
          <Image
            src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAACmG4H52GI2ESsex3aFZtqIX4g.png"
            className="mb-1 me-2"
            width={30}
            height={30}
          />
          <p>HR</p>
        </NavLink>
        <NavLink className={`d-flex align-items-center nav-link `}>
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
