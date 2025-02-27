import { useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
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

  return (
    <div className=" align-items-center position-relative">
      <Button variant="outline-light" className="border-0 mb-2 ms-2 rounded-circle" onClick={handleClick}>
        <EmojiSmile />
      </Button>

      <Overlay show={show} target={target} placement="top" containerPadding={10}>
        <Popover>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </Popover>
      </Overlay>
    </div>
  );
};

export default Emoji;
