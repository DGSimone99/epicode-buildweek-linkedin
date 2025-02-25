import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { ChevronCompactDown } from "react-bootstrap-icons";

const MyCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="p-1 fw-semibold"
        variant="light"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Vedi altro
        <ChevronCompactDown className="ms-2" />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p className="fw-semibold mb-0">I giovani lavoratori sono sempre me...</p>
          <p className="text-secondary">4 ore fa • 122 lettori</p>
        </div>
      </Collapse>
    </>
  );
};
export default MyCollapse;
