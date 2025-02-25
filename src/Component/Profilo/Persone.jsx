import { Button, Container, Spinner } from "react-bootstrap";
import PersonaSingola from "./PersonaSingola";
import React, { useEffect } from "react";
import { fetchProfiles } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PersoneModal from "./PersoneModal";

const Persone = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const profiles = useSelector((state) => state.profiles.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <Container className="bg-white border rounded-3 d-flex flex-column px-0">
      <Container className="px-4 pt-4">
        <h5>
          <strong className="fw-semibold">Persone che potresti conoscere</strong>
        </h5>
        <h6 className="text-secondary">Dalla tua scuola o università</h6>
      </Container>
      <Container className="px-4">
        {profiles.length > 0 ? (
          profiles.slice(5, 10).map((profile, i) => {
            return (
              <div key={profile._id}>
                <PersonaSingola profile={profile} />
                {i < 4 && <hr />}
              </div>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Container>
      <hr className="mb-0" />
      <Button className="text-center bg-transparent border-0 py-2 showAll" onClick={() => setModalShow(true)}>
        <strong className="text-secondary">Mostra tutto</strong>
      </Button>
      <PersoneModal show={modalShow} onHide={() => setModalShow(false)} profiles={profiles} />
    </Container>
  );
};
export default Persone;
