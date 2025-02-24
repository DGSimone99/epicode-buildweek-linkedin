import { Container } from "react-bootstrap";

const Language = () => (
  <Container>
    <label htmlFor="globalfooter-select_language">Seleziona Lingua</label>
    <select>
      <option value="it_IT" lang="it-it">
        Italiano
      </option>
      <option value="en_US" lang="en-us">
        English
      </option>
    </select>
  </Container>
);

export default Language;
