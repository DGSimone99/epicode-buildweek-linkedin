import { Container } from "react-bootstrap";
import FooterList from "./FooterList";
import FooterList2 from "./FooterList2";
import Language from "./Languages";

const CustomFooter = () => (
  <footer className="linkedIn-footer">
    <Container>
      <FooterList />
      <FooterList2 />
      <Language />
    </Container>
    <p>LinkedIn Corporation © 2025</p>
  </footer>
);

export default CustomFooter;
