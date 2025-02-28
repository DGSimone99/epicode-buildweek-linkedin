import { Button, Image } from "react-bootstrap";
import {
  ArrowReturnLeft,
  ArrowRight,
  BanFill,
  BoxArrowUpRight,
  BriefcaseFill,
  CheckCircleFill,
  Lightbulb,
  ListCheck,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";

const DettaglioSingoloLavoro = ({ job }) => {
  return (
    <div className="bg-white border p-3 overflow-y-scroll" style={{ height: "calc(100vh - 120px)" }}>
      <div className="d-flex align-items-center">
        <Image
          className="pointer"
          src={
            job.company_logo_url ||
            "https://media.licdn.com/dms/image/v2/C4D0BAQEv4iZCWCWMsA/company-logo_200_200/company-logo_200_200/0/1647188299217/ca_silca_logo?e=2147483647&v=beta&t=cV2jOR6v2lO3P0a6HP0hJNgs8HaZMomC9_wtK75uZNI"
          }
          style={{ objectFit: "cover", width: "30px", height: "30px" }}
        />
        <p className="mb-0 ms-2 pointer2">{job.company_name} </p>
        <div className="ms-auto">
          <ArrowReturnLeft style={{ transform: "rotate(180deg)", color: "black" }} className="me-3" />
          <ThreeDots />
        </div>
      </div>
      <div>
        <h2 className="mt-2 pointer2">{job.title}</h2>
        <p className="mb-0 text-secondary">
          {job.candidate_required_location} · {job.publication_date} · 48 persone hanno cliccato sul pulsante
          “Candidati”
        </p>
        <div className="d-flex align-items-start mt-2">
          <BriefcaseFill className="pointer" />
          <p style={{ backgroundColor: "#DAEBD1" }} className="rounded-3 px-1 ms-2 mb-0 pointer2">
            In sede
          </p>
          <p className="ms-2">·</p>
          <p style={{ backgroundColor: "#DAEBD1" }} className="rounded-3 px-1 ms-2 mb-0 pointer2">
            {job.job_type}
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
          <p className=" ms-3 my-3">
            Vuoi sapere come ti posizioni? Vedi un confronto con altre 48 persone che hanno cliccato su “Candidati”.{" "}
            <a href="#" className="text-black">
              Prova Premium per 0 EUR
            </a>
          </p>
        </div>
        <div className="d-flex sticky-top m-0 bg-white p-3" style={{ top: "-16px" }}>
          <Button variant="primary" className="align-items-baseline rounded-pill me-2 px-4">
            <strong>Candidati</strong>
            <BoxArrowUpRight color="white" className="ms-2" />
          </Button>
          <Button variant="outline-primary" className="rounded-pill px-4">
            <strong>Salva</strong>
          </Button>
        </div>
        <h5 className="mt-3">Persone che puoi contattare</h5>
        <div className="d-flex align-items-center border rounded-3 p-3">
          <Image
            className="pointer"
            src="https://media.licdn.com/dms/image/v2/C510BAQF5OJVPD2RZjA/company-logo_100_100/company-logo_100_100/0/1631329806779?e=1748476800&v=beta&t=Da08f8UuUa-Cn51jFtcVNsdNRftYCHsSCgI_Q3LFUJw"
            width={50}
            height={50}
          />
          <p className="ms-2 me-2 mb-0 pointer2">Ex studenti di Sapienza Università di Roma</p>
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
            <div className="ms-2 mb-0 pointer">
              <h5 className="pointer2">Enrico Forlino</h5>
              <p className="mb-0">Team Leader presso Hays - Divisione Sales & Marketing</p>
              <p className="mb-0">Autore offerta di lavoro · 2 collegamenti in comune </p>
            </div>
            <Button variant="outline-secondary" className="rounded-pill px-4 ms-auto">
              <SendFill className="me-1" />
              Messaggio
            </Button>
          </div>
        </div>

        <div>
          <h5>Informazioni sull’offerta di lavoro</h5>
          <p className="mb-0 mt-2 pointer2">{job.title}</p>

          <div dangerouslySetInnerHTML={{ __html: job.description }} />

          {/*  <p className="mb-0  mt-3">
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
          </p> */}
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
            <Button variant="warning" className="rounded-pill my-2">
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
