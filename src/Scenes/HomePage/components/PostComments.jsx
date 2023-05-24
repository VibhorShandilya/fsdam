import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  Image,
} from "lucide-react";
import Comments from "./Comments";

const PostComments = ({ postComments }) => {
  return (
    <div className="">
      <div className="p-4 flex flex-row gap-3 shadow-md">
        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <Heart size={22} color="#AFB9CA" />
          <span className="text-[#AFB9CA]">{postComments.postLikes}</span>
        </div>

        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <MessageCircle size={22} color="#AFB9CA" />
          <span className="text-[#AFB9CA]">
            {postComments.Comments?.length}
          </span>
        </div>

        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <Bookmark size={22} color="#AFB9CA" />
        </div>

        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <MoreHorizontal size={22} color="#AFB9CA" />
        </div>
      </div>

      <div className="p-3">
        {postComments.Comments.map((comment, index) => {
          return <Comments comment={comment} key={index} />;
        })}
      </div>

      <div className="border-t p-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4 flex-1">
            <Image size={20} color="#919EB6" className="cursor-pointer" />
            <input
              type="text"
              placeholder="댓글을 남겨주세요."
              className="outline-none flex-1"
            />
          </div>

          <div className="">
            <p className="cursor-pointer text-[#919EB6]">등록</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
