import { useState } from "react";
import { Button, Card, Dropdown, Image } from "react-bootstrap";
import {
  Bookmark,
  ChatDots,
  EyeSlashFill,
  FlagFill,
  HandThumbsUpFill,
  Link45deg,
  Recycle,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { BiGlobe, BiX, BiXCircle } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";

const PostCard = (props) => {
  const [like, setLike] = useState(Math.floor(Math.random() * 100));
  const [liked, setLiked] = useState(false);

  const likeClick = () => {
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="mt-3">
      <Card.Body className="p-0">
        <div className="d-flex justify-content-between">
          <Card.Title className="d-flex align-items-center px-3 pt-3">
            <div className="me-2">
              <Image variant="top" src={props.userImg} height={48} width={48} className="rounded-circle" />
            </div>
            <div>
              <h5 className="mb-0">{props.userName}</h5>
              <p className="fw-normal my-1 text-secondary" style={{ fontSize: "0.6em" }}>
                {Math.floor(Math.random() * 1000).toLocaleString()} follower
              </p>
              <p className="fw-normal mb-0 d-flex align-items-center text-secondary" style={{ fontSize: "0.6em" }}>
                {props.date} &#8226;&nbsp;<BiGlobe></BiGlobe>
              </p>
            </div>
          </Card.Title>
          <div className="d-flex pe-3 pt-0 mt-0 align-items-center fs-2">
            <Dropdown className="">
              <Dropdown.Toggle className="bg-transparent p-0 m-0 border-0 me-2 mb-2 toggleRemove">
                <ThreeDots></ThreeDots>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                  <Bookmark className="me-2 text-black"></Bookmark> Salva
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                  <Link45deg className="me-2 text-black"></Link45deg> Copia link al post
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                  <EyeSlashFill className="me-2 text-black"></EyeSlashFill> Non mi interessa
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                  <BiXCircle className="me-2 text-black"></BiXCircle> Smetti di seguire {props.userName}
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                  <FlagFill className="me-2 text-black"></FlagFill> Segnala post
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <BiX className="pointer"></BiX>
          </div>
        </div>
        <Card.Text className="d-flex align-items-center px-3">{props.text}</Card.Text>
        {props.image ? (
          <div>
            <Card.Img src={props.image} className="rounded-0"></Card.Img> <hr className="my-1"></hr>
          </div>
        ) : (
          <div></div>
        )}
        <div className="d-flex justify-content-between me-3  mb-2">
          <div className="d-flex px-3 align-items-center">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center me-2 pointer ${
                liked ? "bg-transparent  border border-info" : "bg-info"
              }`}
              style={{ paddingBlock: "3px", paddingInline: "3px" }}
            >
              <HandThumbsUpFill
                className={liked ? "text-info" : "text-white"}
                id="thumb-up"
                onClick={likeClick}
              ></HandThumbsUpFill>
            </div>
            <div>{like}</div>
            <Card.Text className="d-flex justify-content-between"></Card.Text>
          </div>
          <Card.Text className="mb-0">
            {Math.floor(Math.random() * 100)} commenti &#8226; {Math.floor(Math.random() * 100)} diffusioni post
          </Card.Text>
        </div>
        <hr className="mx-3 pt-0 mt-0"></hr>
        <div className="d-flex px-4 pb-3 justify-content-center">
          <Button variant="primary" className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center">
            <BsHandThumbsUp className="me-1"></BsHandThumbsUp> Consiglia
          </Button>
          <Button
            variant="primary"
            className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center ms-3"
          >
            <ChatDots className="me-1"></ChatDots> Commenta
          </Button>
          <Button
            variant="primary"
            className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center mx-3"
          >
            <Recycle className="me-1"></Recycle> Diffondi il post
          </Button>
          <Button variant="primary" className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center">
            <SendFill className="me-1"></SendFill> Invia
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
