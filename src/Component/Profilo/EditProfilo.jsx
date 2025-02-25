import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { editUser } from "../redux/actions";

function EditProfilo(props) {
  const user = useSelector((state) => state.user.content);
  const [newData, setNewData] = useState({
    _id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    username: user.username,
    title: user.title,
    bio: user.bio,
    area: user.area,
    image: user.image,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    __v: user.__v,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(newData);
  console.log(user);

  useEffect(() => {
    setNewData(user);
  }, [user]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <p>* Indica che è obbligatorio</p>
        {user ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome*</Form.Label>
              <Form.Control type="text" value={newData.name} name="name" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control type="text" value={newData.surname} name="surname" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSummary">
              <Form.Label>Sommario</Form.Label>
              <Form.Control type="text" value={newData.bio} name="bio" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Titolo*</Form.Label>
              <Form.Control type="text" value={newData.title} name="title" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicArea">
              <Form.Label>Area*</Form.Label>
              <Form.Control type="text" value={newData.area} name="area" onChange={handleChange} required />
            </Form.Group>
          </Form>
        ) : (
          <Spinner animation="grow" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(editUser(newData));
          }}
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditProfilo;
