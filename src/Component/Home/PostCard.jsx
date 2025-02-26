import { Button, Card, Dropdown, Image } from "react-bootstrap";
import { ChatDots, Recycle, SendFill, ThreeDots } from "react-bootstrap-icons";
import { BiGlobe, BiX } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";

const PostCard = (props) => {
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
              <p className="fw-normal my-0 text-secondary" style={{ fontSize: "0.6em" }}>
                10.000 follower
              </p>
              <p className="fw-normal mb-0 d-flex align-items-center text-secondary" style={{ fontSize: "0.6em" }}>
                {props.date} &#8226;&nbsp;<BiGlobe></BiGlobe>
              </p>
            </div>
          </Card.Title>
          <div className="d-flex pe-3 pt-0 mt-0 align-items-center fs-2">
            <Dropdown className="">
              <Dropdown.Toggle className="bg-transparent p-0 m-0 border-0 me-2 mb-2">
                <ThreeDots></ThreeDots>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <BiX></BiX>
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
        <div className="d-flex justify-content-between me-3">
          <Card.Text className="d-flex justify-content-between px-3 mb-2">8</Card.Text>
          <Card.Text className="mb-0">3 commenti &#8226; 1 diffusione post</Card.Text>
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
