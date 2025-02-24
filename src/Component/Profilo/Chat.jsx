import { Dropdown } from "react-bootstrap";
import { PersonCircle, ThreeDots, PencilSquare } from "react-bootstrap-icons";

const Chat = () => {
  return (
    <div className="position-fixed bottom-0 end-0 m-3 border rounded-3">
      <Dropdown drop="up">
        <Dropdown.Toggle variant="white">
          <PersonCircle size={20} color="grey" />
          Messaggistica
          <ThreeDots size={20} color="grey" />
          <PencilSquare size={20} color="grey" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Messaggio 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Messaggio 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Messaggio 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Chat;
