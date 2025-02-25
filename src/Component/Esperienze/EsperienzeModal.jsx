import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router";

function EsperienzeModal(props) {
  const [stillInJob, setStillinJob] = useState(true);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEsperienza();
  };
  const fetchEsperienza = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/:userId/experiences", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: role,
          startDate: `${startYear}-${startMonth}-01`,
          company: company,
          endDate: endMonth !== "" && endYear !== "" ? `${endYear}-${endMonth}-01` : null,
          description: description,
          area: area,
        }),
      });
      if (resp.ok) {
        alert("esperienza aggiunta con successo");
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.error(error);
      alert("errore nell'aggiunta dell'esperienza");
    }
  };

  const handleJobRole = (e) => {
    setRole(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleStartMonth = (e) => {
    setStartMonth(e.target.value);
  };
  const handleStartYear = (e) => {
    setStartYear(e.target.value);
  };
  const handleEndMonth = (e) => {
    setEndMonth(e.target.value);
  };
  const handleEndYear = (e) => {
    setEndYear(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const handleCheck = (e) => {
    setStillinJob(e.target.checked);
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Body className="p-0" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <div className="px-5 py-3" style={{ backgroundColor: "#EDF3F8" }}>
            <h3 className="fs-6">
              <strong>Informa la rete</strong>
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
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Esempio: Backend Developer"
              required
              value={role}
              onChange={(e) => handleJobRole(e)}
            />
            <Form.Label>Tipo di impiego</Form.Label>
            <Form.Select className="mb-4">
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
            <Form.Label>Azienda o organizzazione*</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Esempio: Microsoft"
              required
              value={company}
              onChange={(e) => handleCompany(e)}
            />
            <Form.Check
              className="d-inline me-2"
              checked={stillInJob}
              onChange={(e) => {
                handleCheck(e);
              }}
            />
            <Form.Label className="mb-4">Attualmente ricopro questo ruolo</Form.Label>
            <br />
            <Form.Label>Data di inizio*</Form.Label>
            <Row className="mb-4">
              <Col>
                <Form.Select required value={startMonth} onChange={(e) => handleStartMonth(e)}>
                  <option disabled>Mese</option>
                  <option value="01">Gennaio</option>
                  <option value="02">Febbraio</option>
                  <option value="03">Marzo</option>
                  <option value="04">Aprile</option>
                  <option value="05">Maggio</option>
                  <option value="06">Giugno</option>
                  <option value="07">Luglio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select required value={startYear} onChange={(e) => handleStartYear(e)}>
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
            <Row className="mb-4">
              <Col>
                <Form.Select
                  disabled={stillInJob}
                  required={!stillInJob}
                  value={endMonth}
                  onChange={(e) => handleEndMonth(e)}
                >
                  <option disabled>Mese</option>
                  <option value="01">Gennaio</option>
                  <option value="02">Febbraio</option>
                  <option value="03">Marzo</option>
                  <option value="04">Aprile</option>
                  <option value="05">Maggio</option>
                  <option value="06">Giugno</option>
                  <option value="07">Luglio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  disabled={stillInJob}
                  required={!stillInJob}
                  value={endYear}
                  onChange={(e) => handleEndYear(e)}
                >
                  <option disabled>Anno</option>
                  {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Località*</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Esempio: Roma, Italia"
              required
              value={area}
              onChange={(e) => handleArea(e)}
            />
            <Form.Label>Tipo di località</Form.Label>
            <Form.Select>
              <option>Seleziona</option>
              <option value="In sede">In sede</option>
              <option value="Ibrida">Ibrida</option>
              <option value="Da remoto">Da Remoto</option>
            </Form.Select>
            <p className="text-secondary mb-4">Scegli un tipo di località</p>
            <Form.Label>Descrizione*</Form.Label>
            <Form.Control
              className="mb-4"
              as="textarea"
              maxLength={2000}
              required
              value={description}
              onChange={(e) => handleDescription(e)}
            ></Form.Control>
            <Form.Label>Sommario del profilo</Form.Label>
            <Form.Control type="text" />
            <p className="text-secondary mb-4">Compare sotto il tuo nome nella parte superiore del profilo</p>
            <Form.Label>Dove hai trovato questa offerta di lavoro?</Form.Label>
            <Form.Select className="mb-4">
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
          <Button type="submit">Salva</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default EsperienzeModal;
