import { Col, Container, Row } from "react-bootstrap";
import CardUtenti from "./CardUtenti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfiles } from "../redux/actions";

const Conoscenti = ({ titolo, partenza, fine }) => {
  const profiles = useSelector((state) => state.profiles.content);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  console.log("SONO PROFILES", profiles);

  console.log("SONO FINE", fine);
  return (
    <Container className="bg-white p-3 rounded-3 border my-3">
      <div className="d-flex">
        <p>
          <strong>{titolo}</strong>
        </p>
        {number == 0 ? (
          <p className="ms-auto pointer " onClick={() => setNumber(8)}>
            Mostra tutto
          </p>
        ) : (
          <p className="ms-auto pointer" onClick={() => setNumber(0)}>
            Mostra meno
          </p>
        )}
      </div>
      <Row xs={2} lg={4} className="g-2">
        {profiles.slice(partenza, fine + number).map((profile) => (
          <Col key={profile._id}>
            <CardUtenti profile={profile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Conoscenti;
