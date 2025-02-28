import { Container } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Comments = (props) => {
  const users = useSelector((state) => state.profiles.content);
  return (
    <Container fluid>
      {users.length > 0 &&
        props.comments.map((comment, i) => {
          const user = users.find((u) => u.username == comment.author);
          console.log(comment);

          return (
            <div key={comment.elementId + i} className="pt-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    {users.find((u) => u.username == comment.author) ? (
                      <img
                        className="rounded-circle fluid me-3"
                        src={user?.image}
                        alt={"user propic"}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <img
                        className="rounded-circle fluid  me-2"
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
                    )}
                  </div>
                  <div className="d-flex flex-column">
                    {users.find((u) => u.username == comment.author) ? (
                      <span className="fw-bold">{user?.name}</span>
                    ) : (
                      <span className="fw-bold">Username</span>
                    )}
                    <p className="mt-2 mb-0">{comment.comment}</p>

                    <div>
                      <p className="pointer text-secondary">Consiglia | Rispondi</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ThreeDots />
                </div>
              </div>
            </div>
          );
        })}
    </Container>
  );
};
export default Comments;
