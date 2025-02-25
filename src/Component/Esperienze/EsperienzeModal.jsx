import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router";

function EsperienzeModal(props) {
  const [stillInJob, setStillinJob] = useState(true);
  const handleCheck = (e) => {
    setStillinJob(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi esperienza</Modal.Title>
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
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                />
              </Col>
            </Row>
          </div>
          <Container className="px-5 py-3">
            <p className="text-secondary">* Indica che è obbligatorio</p>
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control type="text" placeholder="Esempio: Backend Developer" required />
            <Form.Label>Tipo di impiego</Form.Label>
            <Form.Select>
              <option>Seleziona</option>
              <option value="A tempo pieno">A tempo pieno</option>
              <option value="Part-time">Part-time</option>
              <option value="Autonomo">Autonomo</option>
              <option value="Freelance">Freelance</option>
              <option value="A contratto">A contratto</option>
              <option value="Stage">Stage</option>
              <option value="Apprendistato">Apprendistato</option>
              <option value="Stagionale">Stagionale</option>
            </Form.Select>
            <Form.Label>Azienda o organizzazione</Form.Label>
            <Form.Control type="text" placeholder="Esempio: Microsoft" />
            <Form.Label>Attualmente Ricopro questo ruolo</Form.Label>
            <Form.Check
              checked={stillInJob}
              onChange={(e) => {
                handleCheck(e);
              }}
            />
            <Form.Label>Data di inizio*</Form.Label>
            <Row>
              <Col>
                <Form.Select required>
                  <option disabled>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select required>
                  <option disabled>Anno</option>
                  {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Data di fine*</Form.Label>
            <Row>
              <Col>
                <Form.Select disabled={stillInJob} required={!stillInJob}>
                  <option disabled>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select disabled={stillInJob} required={!stillInJob}>
                  <option disabled>Anno</option>
                  {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Località</Form.Label>
            <Form.Control type="text" placeholder="Esempio: Roma, Italia" />
            <Form.Label>Tipo di località</Form.Label>
            <Form.Select type="text" placeholder="Esempio: Roma, Italia">
              <option>Seleziona</option>
              <option value="In sede">In sede</option>
              <option value="Ibrida">Ibrida</option>
              <option value="Da remoto">Da Remoto</option>
            </Form.Select>
            <p className="text-secondary">Scegli un tipo di località</p>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" maxLength={2000}></Form.Control>
            <Form.Label>Sommario del profilo</Form.Label>
            <Form.Control type="text" />
            <p className="text-secondary">Compare sotto il tuo nome nella parte superiore del profilo</p>
            <Form.Label>Dove hai trovato questa offerta di lavoro?</Form.Label>
            <Form.Select>
              <option>Seleziona</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Sito Web dell'azienda">Sito Web dell&apos;azienda</option>
              <option value="Indeed">Indeed</option>
              <option value="Altri siti di offerte di lavoro">Altri siti di offerte di lavoro</option>
              <option value="Segnalazione">Segnalazione</option>
              <option value="Contattati dal Recruiter">Contattati dal Recruiter</option>
              <option value="Agenzia di selezione del personale">Agenzia di selezione del personale</option>
              <option value="Altro">Altro</option>
            </Form.Select>
            <p>Queste informazioni verranno usate per migliorare la ricerca di lavoro su LinkedIn.</p>
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
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default EsperienzeModal;
