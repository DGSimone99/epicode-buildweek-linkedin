import { Container, Image } from "react-bootstrap";
import { ChevronCompactRight, InfoSquareFill } from "react-bootstrap-icons";
import NotiziePrimoPiano from "./NotiziePrimoPiano";
import MyCollapse from "./MyCollapse";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";

const PrimoPiano = () => {
  const dispatch = useDispatch();
  const notizie = useSelector((state) => state.news.content.data);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <Container fluid className="bg-white border rounded-3 d-none d-lg-block px-0">
      <div className="d-flex align-items-center pt-3 px-3 ">
        <h3 className="mb-1 pointer">In primo piano</h3>
        <InfoSquareFill color="black" className="ms-auto pointer" />
      </div>
      <p className="text-secondary fw-semibold pointer px-3 ">a cura di LinkedIn Notizie</p>

      {notizie?.slice(0, 5).map((notizia, index) => {
        return (
          <NotiziePrimoPiano
            key={index}
            titolo={notizia.title}
            aggiornamento={notizia.published_at.slice(0, 10)}
            url={notizia.url}
          />
        );
      })}
      <MyCollapse />
      <div className="px-3 mt-3">
        <h6 className="text-secondary mt-3 mb-3">I Giochi di oggi</h6>
        <div className="d-flex mb-3 align-items-center pointer2">
          <div>
            <Image src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" height={48} />
          </div>
          <div className="ms-3">
            <p className="fw-bold mb-0">Tango</p>
            <p className="text-secondary mb-0">Armonizza la griglia</p>
          </div>
          <ChevronCompactRight className="ms-auto" />
        </div>
        <div className="d-flex mb-4 align-items-center pointer2">
          <div>
            <Image src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" height={48} />
          </div>
          <div className="ms-3">
            <p className="fw-bold mb-0">Queens</p>
            <p className="text-secondary mb-0">Incorona ogni regione</p>
          </div>
          <ChevronCompactRight className="ms-auto" />
        </div>
      </div>
    </Container>
  );
};
export default PrimoPiano;
