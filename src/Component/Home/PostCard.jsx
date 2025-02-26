import { Button, Card, Dropdown, Image } from "react-bootstrap";
import { ChatDots, Recycle, SendFill, ThreeDots } from "react-bootstrap-icons";
import { BiCross, BiGlobe, BiX } from "react-icons/bi";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { FaCross } from "react-icons/fa";

const PostCard = () => {
  return (
    <Card className="mt-3">
      <Card.Body className="p-0">
        <div className="d-flex justify-content-between">
          <Card.Title className="d-flex align-items-center px-3 pt-3">
            <div>
              <Image variant="top" src="holder.js/100px180" height={48} width={48} />
            </div>
            <div>
              <h5 className="mb-0">EPICODE</h5>
              <p className="fw-normal my-0" style={{ fontSize: "0.6em" }}>
                Numero follower
              </p>
              <p className="fw-normal mb-0 d-flex align-items-center" style={{ fontSize: "0.6em" }}>
                Data &#8226;&nbsp;<BiGlobe></BiGlobe>
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
        <Card.Text className="d-flex align-items-center px-3">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Card.Img
          src="https://p7.informazione.it/fimg/2023/09/89a61b78-1f7b-4996-ba80-d0d9c5915933.jpg?w=1200&h=800&scale=both&mode=crop"
          className="rounded-0"
        ></Card.Img>
        <hr className="my-1"></hr>
        <Card.Text className="d-flex justify-content-between px-3 mb-2">
          <span className="mb-0">Numero Mi Piace</span>
          <span className="mb-0">Numero Commenti &#8226; Numero condivisioni</span>
        </Card.Text>
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
