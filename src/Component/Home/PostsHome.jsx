import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostsHome = () => {
  const posts = useSelector((state) => state.post.content);
  const reversedPosts = [...posts].reverse();

  return reversedPosts.slice(1, 9).map((post) => {
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
  });
};

export default PostsHome;
