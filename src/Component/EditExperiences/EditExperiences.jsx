import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience, fetchUser } from "../redux/actions";
import { ArrowLeft, Bag, Pencil, PlusLg, Trash3 } from "react-bootstrap-icons";
import placeholderEsperienze from "../../assets/placeholderEsperienze.svg";
import EsperienzeModal from "../Esperienze/EsperienzeModal";
import { useNavigate } from "react-router";

const EditExperiences = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const user = useSelector((state) => state.user.content);
  const experiences = useSelector((state) => state.experiences.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchExperience());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDelete = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4dcce703370015316db1/experiences/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("elemento cancellato correttamente");
          dispatch(fetchExperience());
        } else {
          alert("errore nella cancellazione");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      {user && (
        <Row className="bg-white p-0" style={{ boxShadow: "0px 13px 13px -12px rgba(0, 0, 0, 0.7)" }}>
          <Col>
            <Container className="d-flex p-2">
              <Col xs={1}>
                {
                  <Image
                    src={user.image}
                    roundedCircle
                    className=" d-block"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                }
              </Col>
              <Col xs={11}>
                <p className="m-0 fw-bold">{user.title}</p>
                <p className="m-0">{user.area}</p>
              </Col>
            </Container>
          </Col>
        </Row>
      )}
      <Container className="mt-3 bg-white rounded-3 border border-1 border-tertiary">
        <Container className="my-3">
          <Row className="justify-content-between">
            <Col className="d-flex align-items-center">
              <ArrowLeft className="text-dark" onClick={() => navigate(-1)} />
              <h2 className="fs-3">Esperienza</h2>
            </Col>
            <Col xs={1} className="d-flex align-items-center">
              <PlusLg
                className="fs-2 text-dark"
                onClick={() => {
                  setSelectedId(null), setModalShow(true);
                }}
              />
            </Col>
          </Row>
          <Container className="d-flex flex-column">
            {experiences.length > 0 ? (
              experiences.map((experience) => {
                return (
                  <Row key={experience._id}>
                    <Col xs={1} className="d-flex">
                      {experience.image ? (
                        <img src={experience.image} alt="" width="50px" height="50px" />
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
                    <Col xs={1}>
                      <Trash3 onClick={() => handleDelete(experience._id)} />

                      <Pencil
                        onClick={() => {
                          setSelectedId(experience._id), setModalShow(true);
                        }}
                      />
                    </Col>
                    <EsperienzeModal show={modalShow} onHide={() => setModalShow(false)} experienceid={selectedId} />
                  </Row>
                );
              })
            ) : (
              <>
                <img src={placeholderEsperienze} alt="placeholder esperienze" className="mx-auto" />
                <h3 className="text-center">Niente da vedere per ora</h3>
                <p className="text-center w-50 mx-auto text-secondary">
                  Le nuove esperienze che aggiungi appariranno qui
                </p>
                <Button
                  variant="light"
                  className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center mx-auto text-primary"
                  onClick={() => setModalShow(true)}
                >
                  Aggiungi esperienza
                </Button>
                <EsperienzeModal show={modalShow} onHide={() => setModalShow(false)} />
              </>
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default EditExperiences;
