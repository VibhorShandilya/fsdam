import { Check, Heart, MoreHorizontal } from "lucide-react";

const NestedComment = ({ comment }) => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between gap-1 mb-[14px]">
        <div className="flex flex-row items-center gap-1">
          <div className="rounded-full w-[34px] h-[34px] bg-[#FFDCA9] overflow-hidden cursor-pointer">
            <img src={comment.commentBy.avatar} alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-1">
              <p className="text-[14px] font-bold cursor-pointer">
                {comment.commentBy.name}
              </p>
              {comment.commentBy.isVerified && (
                <div className="bg-[#01B99F] rounded-full w-[16px] h-[16px] flex items-center justify-center font-bold">
                  <Check size={13} color="white" strokeWidth={3} />
                </div>
              )}
              <span className="text-[#919EB6] text-[10px]">
                {comment.commentBy.meta}
              </span>
            </div>
          </div>
        </div>

        <div>
          <MoreHorizontal size={14} color="#AFB9CA" />
        </div>
      </div>

      <div className="pl-10">
        <div className="flex flex-col gap-1 mb-[14px]">
          <p className="text-xs">{comment.description}</p>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row gap-1 items-center cursor-pointer">
              <Heart size={22} color="#AFB9CA" />
              <span className="text-[#AFB9CA]">{comment.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedComment;
