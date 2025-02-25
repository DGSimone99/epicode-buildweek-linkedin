import { Col, Container, Form, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router";

function FormazioneModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi titoli di studio</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body className="p-0" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <div className="px-5 py-3" style={{ backgroundColor: "#EDF3F8" }}>
            <h3 className="fs-6">
              <strong>Informa La rete</strong>
            </h3>
            <Row>
              <Col xs={10}>
                <p className="m-0">
                  Attiva l&apos;opzione per informare la tua rete delle principali modifiche al profilo &#40;ad esempio
                  un nuovo lavoro&#41; e degli anniversari lavorativi. Gli aggiornamenti possono richiedere fino a 2
                  ore. Scopri di più sulla condivisione delle modifiche del profilo.
                </p>
              </Col>
              <Col xs={2}>
                <Form.Label>Sì</Form.Label>
                <Form.Check type="switch" id="custom-switch" />
              </Col>
            </Row>
          </div>
          <Container className="px-5 py-3">
            <p className="text-secondary">* Indica che è obbligatorio</p>
            <Form.Label>Scuola o università*</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Esempio: Università degli Studi di Salerno"
              required
            />
            <Form.Label>Tipo di studio</Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="Esempio: Laurea" required />
            <Form.Label>Corso di studi</Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="Esempio: Economia" />
            <Form.Label>Data di inizio*</Form.Label>
            <Row className="mb-4">
              <Col>
                <Form.Select>
                  <option>Mese</option>
                  <option value="Gennaio">Gennaio</option>
                  <option value="Febbraio">Febbraio</option>
                  <option value="Marzo">Marzo</option>
                  <option value="Aprile">Aprile</option>
                  <option value="Maggio">Maggio</option>
                  <option value="Giugno">Giugno</option>
                  <option value="Luglio">Luglio</option>
                  <option value="Agosto">Agosto</option>
                  <option value="Settembre">Settembre</option>
                  <option value="Ottobre">Ottobre</option>
                  <option value="Novembre">Novembre</option>
                  <option value="Dicembre">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Data di fine</Form.Label>
            <Row className="mb-4">
              <Col>
                <Form.Select>
                  <option>Mese</option>
                  <option value="Gennaio">Gennaio</option>
                  <option value="Febbraio">Febbraio</option>
                  <option value="Marzo">Marzo</option>
                  <option value="Aprile">Aprile</option>
                  <option value="Maggio">Maggio</option>
                  <option value="Giugno">Giugno</option>
                  <option value="Luglio">Luglio</option>
                  <option value="Agosto">Agosto</option>
                  <option value="Settembre">Settembre</option>
                  <option value="Ottobre">Ottobre</option>
                  <option value="Novembre">Novembre</option>
                  <option value="Dicembre">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Votazione</Form.Label>
            <Form.Control className="mb-4" type="text" />
            <Form.Label>Attività e associazioni</Form.Label>
            <Form.Control
              className="mb-4"
              as="textarea"
              maxLength={500}
              placeholder="Esempio: pesca, pallavolo, immersioni"
            />
            <Form.Label>Descrizione</Form.Label>
            <Form.Control className="mb-4" as="textarea" maxLength={1000}></Form.Control>

            <Container fluid className="px-0 py-3">
              <h3>Competenze</h3>
              <p>
                Ti consigliamo di aggiungere le 5 competenze più utilizzate in questo ruolo. Appariranno anche nella
                sezione Competenze.
              </p>
              <Button
                variant="light"
                className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
              >
                <Plus className="text-primary me-2" />
                Aggiungi competenze
              </Button>
            </Container>
            <Container fluid className="px-0 py-3">
              <h3>Media</h3>
              <p>
                Aggiungi contenuti multimediali come immagini, documenti, siti o presentazioni. Scopri di più sui tipi
                di file multimediali supportati <Link>tipi di file multimediali supportati</Link>
              </p>
              <Button
                variant="light"
                className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
              >
                <Plus className="text-primary me-2" />
                Aggiungi Media
              </Button>
            </Container>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Salva</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default FormazioneModal;
