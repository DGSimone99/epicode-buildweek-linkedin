import { Container } from "react-bootstrap";
import { ArrowRight, EyeFill } from "react-bootstrap-icons";

const Analisi = () => {
  return (
    <>
      <Container className=" bg-white border rounded-3 p-0 pt-3">
        {/* py-3 */}
        <div className="ps-4">
          <h5 className="mb-0">
            <strong>Analisi</strong>
          </h5>
          <p className="text-secondary">
            <EyeFill /> Solo per te
          </p>

          <div className="d-flex pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            </div>
            <div className="ms-2">
              <p className="mb-0">
                <strong>Visualizzazioni del profilo</strong>
              </p>
              <p>Scopri chi ha visitato il tuo profilo.</p>
            </div>
          </div>

          <div className="d-flex pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
            </div>
            <div className="ms-2">
              <p className="mb-0">
                <strong>Impression del post</strong>
              </p>
              <p className="mb-0">Crea un post per aumentare l&apos;interesse.</p>
              <p className="text-secondary">Ultimi 7 giorni</p>
            </div>
          </div>
        </div>
        <div className="border-top py-2">
          <p className="fw-bold text-center mb-0 pointer">
            Mostra tutte le analisi <ArrowRight />
          </p>
        </div>
      </Container>
    </>
  );
};

export default Analisi;
