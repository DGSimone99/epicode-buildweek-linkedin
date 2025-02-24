import { Container } from "react-bootstrap";

const FooterList2 = () => (
  <Container>
    <ul>
      <li>
        <i class="bi bi-question-circle-fill"></i>
        <span>
          <a href="#">Domande?</a>
          <p>Visita il nostro Centro assistenza.</p>
        </span>
      </li>
      <li>
        <i class="bi bi-gear-fill"></i>
        <span>
          <a href="#">Gestisci il tuo account e la tua privacy</a>
          <p>Vai alle impostazioni</p>
        </span>
      </li>
      <li>
        <i class="bi bi-shield-shaded"></i>
        <span>
          <a href="#">Trasparenza sui contenuti consigliati</a>
          <p>Scopri di più sui contenuti consigliati.</p>
        </span>
      </li>
    </ul>
  </Container>
);

export default FooterList2;
