import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import { useState } from "react";
import { Button } from "react-bootstrap";

const PostsHome = () => {
  const posts = useSelector((state) => state.post.content);
  const reversedPosts = [...posts].reverse();
  const [numPost, setNumPost] = useState(9);

  return (
    <div>
      {reversedPosts.slice(0, numPost).map((post) => {
        return (
          <PostCard
            key={post._id}
            userImg={post.user.image}
            userName={post.user.name}
            surname={post.user.surname}
            image={post.image}
            date={post.createdAt.slice(0, 10)}
            text={post.text}
            id={post.user._id}
            postId={post._id}
          />
        );
      })}
      <div className="d-flex justify-content-center mt-3">
        <Button className="rounded-pill bg-transparent morePostsBtn" onClick={() => setNumPost(numPost + 9)}>
          Vedi nuovi Post
        </Button>
      </div>
    </div>
  );
};

export default PostsHome;
