import { useState } from "react";
import { Button, Overlay, Popover, Form } from "react-bootstrap";
import EmojiPicker from "emoji-picker-react";
import { EmojiSmile } from "react-bootstrap-icons";

const Emoji = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onEmojiClick = (emojiObject) => {
    onChange(value + emojiObject.emoji);
    setShow(false);
  };
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className=" align-items-center position-relative">
      <div className="mb-5">
        <Form.Control
          type="text"
          className="border-0 shadow-none me-2"
          placeholder="Di cosa vorresti parlare?"
          value={value}
          onChange={handleChange}
        />
      </div>

      <Button variant="outline-light" className="border-0 mt-5 mb-2 rounded-circle" onClick={handleClick}>
        <EmojiSmile />
      </Button>

      <Overlay show={show} target={target} placement="top" containerPadding={10}>
        <Popover>
          <Popover.Body>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default Emoji;
