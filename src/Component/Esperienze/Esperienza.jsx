import { Button, Col, Container, Row } from "react-bootstrap";
import EsperienzeModal from "./EsperienzeModal";
import React, { useEffect } from "react";
import { Bag, PencilFill, Plus, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../redux/actions";
import { Link } from "react-router";

const Esperienza = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.content);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    dispatch(fetchExperience());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 py-3 mt-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <h5 className="fw-bold">Esperienza</h5>
            {experiences.length > 0 ? (
              <div>
                <Plus onClick={() => setModalShow(true)} className="pointer" />
                <Link to={"/editexperiences"}>
                  <PencilFill />
                </Link>
              </div>
            ) : (
              <XLg className="text-dark" />
            )}
          </Col>
        </Row>
        <p className="text-secondary">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti
        </p>
        {experiences.length > 0 ? (
          experiences.map((experience) => {
            return (
              <Row key={experience._id}>
                <Col xs={1} className="d-flex">
                  {experience.image ? (
                    <img src={experience.image} alt="" width="50px" height="50px" className="pointer" />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center p-3 border border-secondary rounded-3 me-auto"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <Bag className="text-secondary"></Bag>
                    </div>
                  )}
                </Col>
                <Col>
                  <h3 className="fs-5">{experience.role}</h3>
                  <p>{experience.company}</p>
                  <p>
                    {experience.endDate
                      ? `from ${new Date(experience.startDate).toLocaleDateString()} to ${new Date(
                          experience.endDate
                        ).toLocaleDateString()}`
                      : `from ${new Date(experience.startDate).toLocaleDateString()}`}
                  </p>
                </Col>
              </Row>
            );
          })
        ) : (
          <Row>
            <Col xs={2} xl={1} className="d-flex">
              <div
                className="d-flex justify-content-center align-items-center p-3 border border-secondary rounded-3 me-auto"
                style={{ width: "50px", height: "50px" }}
              >
                <Bag className="text-secondary"></Bag>
              </div>
            </Col>
            <Col className="text-secondary">
              <h3 className="fs-5">Qualifica</h3>
              <p>Organizzazione</p>
              <p>2023-presente</p>
            </Col>
          </Row>
        )}
        <Button
          variant="light"
          className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
          onClick={() => setModalShow(true)}
        >
          Aggiungi esperienza
        </Button>
        <EsperienzeModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Container>
  );
};
export default Esperienza;
