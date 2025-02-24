import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { PencilSquare, PersonCircle, ThreeDots } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Chat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="position-fixed bottom-0 end-0 bg-white border rounded-top" style={{ width: "275px" }}>
      <Button onClick={() => setOpen(!open)} aria-controls="chat-collapse-content" aria-expanded={open} variant="light" className="w-100 p-0 border-0">
        <div className="d-flex align-items-center justify-content-between p-2">
          <PersonCircle size={20} color="grey" />
          <span>Messaggistica</span>
          <div className="d-flex gap-2 ms-auto">
            <ThreeDots size={20} color="grey" />
            <PencilSquare size={20} color="grey" />
          </div>
        </div>
      </Button>
      <Collapse in={open}>
        <div className="p-2" id="chat-collapse-content">
          <h4>Ancora nessun messaggio</h4>
          <p>Entra in contatto e dai il via a una conversazione per far decollare la tua carriera</p>
          <Button variant="white">Invia un messaggio</Button>
        </div>
      </Collapse>
    </div>
  );
};

export default Chat;
