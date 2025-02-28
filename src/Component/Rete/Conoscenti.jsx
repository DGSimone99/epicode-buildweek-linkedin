import { Col, Container, Row } from "react-bootstrap";
import CardUtenti from "./CardUtenti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions";

const Conoscenti = () => {
  const profiles = useSelector((state) => state.profiles.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  console.log("SONO PROFILES", profiles);
  return (
    <Container className="bg-white p-3 rounded-3 border">
      <h5>Persone che potresti conoscere in base alla tua attività recente</h5>
      <Row xs={4} className="g-2">
        {profiles.slice(200, 200 + 8).map((profile) => (
          <Col key={profile._id}>
            <CardUtenti profile={profile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Conoscenti;
