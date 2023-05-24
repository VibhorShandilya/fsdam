import PostCarousel from "./PostCarousel";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const Post = ({ post }) => {
  return (
    <div className="">
      <PostHeader postHeader={post.postHeader} />

      <PostCarousel postImages={post.postImages} />

      <PostComments postComments={post.postComments} />
    </div>
  );
};

export default Post;
