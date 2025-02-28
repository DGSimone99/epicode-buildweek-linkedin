/* eslint-disable react/no-unescaped-entities */
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router";
import notFound from "../assets/NotFound.png";

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <Image src={notFound}></Image>
      <h3>Questa pagina non esiste</h3>
      <h5 className="fw-normal text-secondary mx-auto">
        Controlla l'URL o torna alla home page di <br></br> LinkedIn
      </h5>
      <Button as={Link} to="/" className="rounded-pill bg-transparent morePostsBtn mt-3">
        Vai al tuo feed
      </Button>
    </div>
  );
};

export default PageNotFound;
