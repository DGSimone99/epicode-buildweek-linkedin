import { Col, Container, Row } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import EditComment from "./EditComment";
import { useState } from "react";

const Comments = (props) => {
  const users = useSelector((state) => state.profiles.content);
  const [editShow, setEditShow] = useState(false);
  return (
    <Container fluid>
      {users &&
        props.comments.map((comment, i) => {
          const user = users.find((u) => u.username === comment.author);
          console.log(user);
          return (
            <div key={comment.elementId + i} className="pt-4">
              <Row>
                <Col xs={2} md={1}>
                  <img
                    className="rounded-circle fluid"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    }
                    alt={"user propic"}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <span className="fw-bold">{"username"}</span>
                    <span className="text-secondary">{"user title"}</span>
                  </div>
                  <div>
                    <ThreeDots onClick={() => setEditShow(true)} />
                    <EditComment show={editShow} onHide={() => setEditShow(false)} commentId={comment._id} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={1}></Col>
                <Col>
                  <p>{comment.comment}</p>
                </Col>
              </Row>
            </div>
          );
        })}
    </Container>
  );
};
export default Comments;
