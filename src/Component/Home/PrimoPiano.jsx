import { Container, Image } from "react-bootstrap";
import { ChevronCompactRight, InfoSquareFill } from "react-bootstrap-icons";
import NotiziePrimoPiano from "./NotiziePrimoPiano";
import MyCollapse from "./MyCollapse";
/* import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions"; */

const PrimoPiano = () => {
  /*   const dispatch = useDispatch();
  const notizia = useSelector((state) => state.news.content); */

  /* useEffect(() => {
    dispatch(fetchNews());
  }, []);
 */
  /*   console.log("SONO LA NOTIZA", notizia); */

  return (
    <Container className="bg-white border rounded-3 p-3">
      <div className="d-flex align-items-center">
        <h3 className="mb-1">In primo piano</h3>
        <InfoSquareFill color="black" className="ms-auto" />
      </div>
      <p className="text-secondary fw-semibold">a cura di LinkedIn Notizie</p>

      {/*  <NotiziePrimoPiano titolo={notizia.results.title} aggiornamento={notizia.results.pubDate} /> */}

      <NotiziePrimoPiano titolo="I giovani lavoratori sono sempre me..." aggiornamento="4 giorni fa • 1.416 lettori" />
      <NotiziePrimoPiano titolo="Fusione tra Saipem e Subsea7" aggiornamento="5 ore fa • 248 lettori" />
      <NotiziePrimoPiano titolo="Roma ospita la COP16 'bis'" aggiornamento="4 ore fa • 122 lettori" />
      <NotiziePrimoPiano titolo="Priorità benessere per i lavoratori" aggiornamento="5 ore fa" />

      <MyCollapse />
      <h5 className="text-secondary mt-4 mb-3">I Giochi di oggi</h5>
      <div className="d-flex mb-3 align-items-center">
        <div>
          <Image src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" height={48} />
        </div>
        <div className="ms-3">
          <h5 className="mb-0">Tango</h5>
          <p className="text-secondary mb-0">Armonizza la griglia</p>
        </div>
        <ChevronCompactRight className="ms-auto" />
      </div>
      <div className="d-flex mb-4 align-items-center">
        <div>
          <Image src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" height={48} />
        </div>
        <div className="ms-3">
          <h5 className="mb-0">Queens</h5>
          <p className="text-secondary mb-0">Incorona ogni regione</p>
        </div>
        <ChevronCompactRight className="ms-auto" />
      </div>
    </Container>
  );
};
export default PrimoPiano;
