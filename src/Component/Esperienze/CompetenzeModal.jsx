import { Card, CloseButton, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CompetenzeModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi competenza</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body className="p-0" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <Container className="px-5 py-3">
            <p className="text-secondary">* Indica che è obbligatorio</p>
            <Form.Label>Competenza*</Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="Competenza (es. project management)" required />
            <Card className="p-3 shadow-sm bg-light">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Suggerite in base al tuo profilo</strong>
                <CloseButton />
              </div>
              <div className="d-flex flex-wrap gap-2">
                <Button id="skill-btn">Node.js</Button>
                <Button id="skill-btn">HTML</Button>
                <Button id="skill-btn">jQuery</Button>
                <Button id="skill-btn">Web design responsivo</Button>
                <Button id="skill-btn">Sviluppo Web</Button>
                <Button id="skill-btn">OOP</Button>
                <Button id="skill-btn">Sviluppo front-end</Button>
                <Button id="skill-btn">Sviluppo Web back-end</Button>
                <Button id="skill-btn">Sviluppo di software</Button>
                <Button id="skill-btn">Sviluppo di applicazioni</Button>
              </div>
            </Card>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Salva</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default CompetenzeModal;
