import { Container, Spinner } from "react-bootstrap";
import PersonaSingola from "./PersonaSingola";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Persone = () => {
  const profiles = useSelector((state) => state.profiles.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);
  return (
    <Container className="bg-white border rounded-3 d-flex flex-column px-0">
      <Container className="px-4 pt-4">
        <h4>
          <strong>Persone che potresti conoscere</strong>
        </h4>
        <h5 className="text-secondary">Dalla tua scuola o università</h5>
      </Container>
      <Container className="px-4">
        {profiles.length > 0 ? (
          profiles.slice(0, 5).map((profile, i) => {
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
      <hr />
      <p className="text-center">
        <strong>Mostra tutto</strong>
      </p>
    </Container>
  );
};
export default Persone;
