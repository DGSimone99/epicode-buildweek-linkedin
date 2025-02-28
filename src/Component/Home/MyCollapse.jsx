import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import NotiziePrimoPiano from "./NotiziePrimoPiano";

const MyCollapse = () => {
  const notizie = useSelector((state) => state.news.content.data);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="p-1 fw-semibold mb-2 mx-3"
        variant="light"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open == false ? (
          <p className="ms-auto mb-0 pointer " onClick={() => setOpen(false)}>
            Mostra altro
            <ChevronCompactDown className="ms-2" />
          </p>
        ) : (
          <p className="ms-auto mb-0 pointer" onClick={() => setOpen(true)}>
            Mostra meno
            <ChevronCompactUp className="ms-2" />
          </p>
        )}
      </Button>
      <Collapse in={open}>
        <div>
          {notizie?.slice(6, 10).map((notizia, index) => {
            return (
              <NotiziePrimoPiano
                key={index}
                titolo={notizia.title}
                aggiornamento={notizia.published_at.slice(0, 10)}
                url={notizia.url}
              />
            );
          })}
        </div>
      </Collapse>
    </>
  );
};
export default MyCollapse;
