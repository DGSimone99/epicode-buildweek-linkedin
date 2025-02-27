import { Button, Image } from "react-bootstrap";
import {
  ArrowRight,
  BanFill,
  BoxArrowUpRight,
  BriefcaseFill,
  CheckCircleFill,
  Lightbulb,
  ListCheck,
  SendFill,
} from "react-bootstrap-icons";

const DettaglioSingoloLavoro = () => {
  return (
    <div className="bg-white border p-3">
      <div className="d-flex align-items-center">
        <Image
          src="data:image/png;base64,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"
          width={30}
          height={30}
        />
        <p className="mb-0 ms-2">Hays </p>
      </div>
      <div>
        <h2>Junior Amministrativo Categoria Protetta L. 68/99 Art.1 </h2>
        <p className="mb-0 text-secondary">
          Roma · 1 settimana fa · 48 persone hanno cliccato sul pulsante “Candidati”
        </p>
        <div className="d-flex align-items-start mt-2">
          <BriefcaseFill />
          <p style={{ backgroundColor: "#DAEBD1" }} className="rounded-3 px-1 ms-2 mb-0">
            In sede
          </p>
          <p className="ms-2">·</p>
          <p style={{ backgroundColor: "#DAEBD1" }} className="rounded-3 px-1 ms-2 mb-0">
            A tempo pieno
          </p>
          <p className="ms-2 mb-0">·</p>
          <p className="ms-2 mb-0">Esperienza minima</p>
        </div>
        <div className="d-flex align-items-center">
          <ListCheck />
          <p className="mb-0 ms-2">Competenze: Problem solving, Back office e 1 altra</p>
        </div>
        <div className="d-flex align-items-center mt-3">
          <Lightbulb />
          <p className="mb-0 ms-3">
            Vuoi sapere come ti posizioni? Vedi un confronto con altre 48 persone che hanno cliccato su “Candidati”.{" "}
            <a href="#" className="text-black">
              Prova Premium per 0 EUR
            </a>
          </p>
        </div>
        <div className="d-flex sticky-top my-3 bg-white p-3">
          <Button variant="primary" className="align-items-baseline rounded-pill me-2 px-4">
            <strong>Candidati</strong>
            <BoxArrowUpRight color="white" className="ms-2" />
          </Button>
          <Button variant="outline-primary" className="rounded-pill px-4">
            <strong>Salva</strong>
          </Button>
        </div>
        <h5>Persone che puoi contattare</h5>
        <div className="d-flex align-items-center border rounded-3 p-3">
          <Image
            src="https://media.licdn.com/dms/image/v2/C510BAQF5OJVPD2RZjA/company-logo_100_100/company-logo_100_100/0/1631329806779?e=1748476800&v=beta&t=Da08f8UuUa-Cn51jFtcVNsdNRftYCHsSCgI_Q3LFUJw"
            width={50}
            height={50}
          />
          <p className="ms-2 me-2 mb-0">Ex studenti di Sapienza Università di Roma</p>
          <Button variant="outline-secondary" className="rounded-pill px-4 ms-auto">
            Mostra tutto
          </Button>
        </div>
        <div className=" border rounded-3 p-3 my-3">
          <h5>Incontra il team di selezione</h5>

          <div className="d-flex align-items-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQEZRmkaAQV5sQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1678901106085?e=1746057600&v=beta&t=CX2rTohzJPpcaaZVRig3eRpf_1NWQKjlheFE4CyD5Mw  "
              width={50}
              height={50}
              className="rounded-circle"
            />
            <div className="ms-2 mb-0">
              <h5>Enrico Forlino</h5>
              <p className="mb-0">Team Leader presso Hays - Divisione Sales & Marketing</p>
              <p className="mb-0">Autore dell'offerta di lavoro · 2 collegamenti in comune </p>
            </div>
            <Button variant="outline-secondary" className="rounded-pill px-4 ms-auto">
              <SendFill className="me-1" />
              Messaggio
            </Button>
          </div>
        </div>

        <div>
          <h5>Informazioni sull’offerta di lavoro</h5>
          <p className="mb-0 mt-2">Junior Amministrativo / L. 68/99 Art.1 / Categoria Protetta</p>

          <p className="mb-0  mt-3">
            <strong>La tua nuova azienda</strong>
          </p>
          <p className="mb-0">
            Il nostro cliente è una delle principali realtà operante nel settore della Ricerca. Con diverse strutture in
            Italia, siamo alla ricerca di un giovane neolaureato o diplomato in discipline umanistiche, appartenente
            alle categorie protette L.68/99 Art. 1, per la posizione di amministrativo e back office.
          </p>

          <p className="mb-0 mt-3">
            <strong>Il tuo nuovo ruolo</strong>
          </p>
          <p className="mb-0">
            Sulla base del tuo ruolo e delle competenze maturate fin ad oggi provvederemo ad illustrarti il progetto di
            crescita, attraction, retention del nostro cliente, creando un progetto che possa fare al caso tuo.
          </p>

          <p className="mb-0 mt-3">
            <strong>Di cosa hai bisogno per aver successo</strong>
          </p>
          <p className="mb-0">
            Si richiede esperienza di 1+ anni in ambito amministrativo o back office ma valuteremo positivamente anche
            profili senza esperienza. Completano il profilo la capacità di multitasking e di problem solving.
          </p>

          <p className="mb-0 mt-3">
            <strong>Cosa avrai in cambio</strong>
          </p>
          <p className="mb-0">
            Inquadramento e RAL commisurate all’esperienza. Ambiente stimolante e realtà aziendale internazionale. Sede:
            Roma
          </p>

          <p className="mb-0 mt-3">
            <strong>Cosa devi fare ora</strong>
          </p>
          <p className="mb-0">
            Se sei interessato a questa opportunità, clicca su "Candidarsi ora" per inviare una copia aggiornata del tuo
            CV. Se questa opportunità non è in linea con le tue aspettative, ma sei alla ricerca di un nuovo lavoro,
            visita il nostro sito Internet per scoprirne di nuove. #LI-DNI
          </p>
        </div>
        <div className=" border rounded-3  my-3">
          <h4 className="m-3">Qualifiche</h4>
          <div className="d-flex border-bottom p-3">
            <Image src="https://static.licdn.com/aero-v1/sc/h/7a68p3v6nxvny8qyhqzibgova " width={50} height={50} />
            <p className="mb-0 ms-2">
              1 competenza corrisponde al tuo profilo. Distinguiti aggiungendo altre competenze.
            </p>
          </div>
          <div className="ms-3 my-2 border-bottom">
            <h5>Competenze aggiunte dall’autore dell’offerta di lavoro</h5>
            <div className="d-flex align-items-center">
              <CheckCircleFill color="#01754F" />
              <div className="d-block">
                <p className="mb-0 ms-2">
                  <strong>1 competenza sul tuo profilo</strong>
                </p>
                <p className="mb-0 ms-2 ">Problem solving</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <BanFill />
              <div className="d-block">
                <p className="mb-0 ms-2">
                  <strong>2 competenze mancanti sul tuo profilo</strong>
                </p>
                <p className="mb-0 ms-2">Back office e Multitasking</p>
              </div>
            </div>
            <div className="p-3">
              <div className="d-flex align-items-center p-1 px-3" style={{ backgroundColor: "#EDF3F8" }}>
                <Lightbulb />
                <p className="mb-0 ms-3">
                  Aggiungi al tuo profilo le competenze che hai per farti notare dal datore di lavoro{" "}
                  <a href="#" style={{ textDecoration: "none" }} className="text-primary fw-bold">
                    Aggiungi competenze
                  </a>
                </p>
              </div>
            </div>
            <Button variant="outline-secondary" className="rounded-pill mb-3">
              Mostra i dettagli delle qualifiche <ArrowRight />
            </Button>
          </div>
          <div className="ms-3">
            <h4>Raggiungi i tuoi obiettivi più velocemente con Premium</h4>
            <p className="mb-0">
              Accedi a informazioni esclusive sui candidati, scopri le offerte di lavoro per cui rientreresti fra i
              migliori candidati, e tanto altro
            </p>
            <div className="d-flex">
              {/*  <Image src="https://media.licdn.com/dms/image/v2/D4D35AQG4CqCLqEQEvQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1735550306073?e=1741258800&v=beta&t=TR7fjF2Z0nCiu3_LdOPBBuCCgFGl4G9gEOerdm8zzdA" /> */}
              <p className="my-2 text-secondary">Antonio Elia e milioni di altri utenti usano Premium</p>
            </div>
            <Button variant="warning" className="rounded-pill">
              <strong>Prova Premium per 0 EUR</strong>
            </Button>
            <p className="text-secondary ">
              Prova gratuita di 1 mese. Annulli in qualsiasi momento. Ti invieremo un promemoria 7 giorni prima della
              fine del periodo di prova.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DettaglioSingoloLavoro;
