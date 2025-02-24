import { Container, Row, Col } from "react-bootstrap";

const FooterList2 = () => (
  <Container>
    <Row>
      <Col md={6}>
        <ul class="nav justify-content-left">
          <li class="nav-item">
            <i class="bi bi-question-circle-fill"></i>
            <span>
              <a href="#">Domande?</a>
              <p>Visita il nostro Centro assistenza.</p>
            </span>
          </li>
          <li class="nav-item">
            <i class="bi bi-gear-fill"></i>
            <span>
              <a href="#">Gestisci il tuo account e la tua privacy</a>
              <p>Vai alle impostazioni</p>
            </span>
          </li>
          <li class="nav-item">
            <i class="bi bi-shield-shaded"></i>
            <span>
              <a href="#">Trasparenza sui contenuti consigliati</a>
              <p>Scopri di più sui contenuti consigliati.</p>
            </span>
          </li>
        </ul>
      </Col>
      <Col md={6}>
        <label htmlFor="globalfooter-select_language">Seleziona Lingua</label>
        <br />
        <select>
          <option value="it_IT" lang="it-it">
            Italiano
          </option>
          <option value="en_US" lang="en-us">
            English
          </option>
        </select>
      </Col>
    </Row>
  </Container>
);

export default FooterList2;
