import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostsHome = () => {
  const posts = useSelector((state) => state.post.content);
  return posts.slice(9, 18).map((post) => {
    return (
      <PostCard
        key={post._id}
        userImg={post.user.image}
        userName={post.user.name}
        image={post.image}
        date={post.createdAt.slice(0, 10)}
        text={post.text}
        id={post.user._id}
      />
    );
  });
};

export default PostsHome;
