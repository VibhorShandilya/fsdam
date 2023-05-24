import { Check } from "lucide-react";

const PostHeader = ({ postHeader }) => {
  return (
    <div className="p-3">
      <div className="flex flex-row items-center justify-between mb-[14px]">
        <div className="flex flex-row items-start justify-between gap-1">
          <div className="rounded-full w-[34px] h-[34px] bg-[#FFDCA9] overflow-hidden cursor-pointer">
            <img src={postHeader.PageProfile} alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-1">
              <p className="text-[14px] font-bold cursor-pointer">
                {postHeader.PageName}
              </p>
              {postHeader.isVerified && (
                <div className="bg-[#01B99F] rounded-full w-[16px] h-[16px] flex items-center justify-center font-bold">
                  <Check size={13} color="white" strokeWidth={3} />
                </div>
              )}
              <span className="text-[#919EB6] text-[10px]">
                {postHeader.PageAltT1}
              </span>
            </div>

            <p className="text-xs text-[#919EB6]">{postHeader.PageAltT2}</p>
          </div>
        </div>

        <div className="">
          <button className="border px-[12px] py-[6px] rounded-full bg-[#01B99F] text-white border-none text-xs">
            팔로우
          </button>
        </div>
      </div>

      <div className="mb-[14px]">
        <p className="text-[14px] font-bold mb-[14px]">
          {postHeader.postMainDesc}
        </p>

        <div className="flex flex-col gap-4">
          {postHeader.postDesc.map((pd, index) => {
            return (
              <p className="text-[14px] text-[#313B49]" key={index}>
                {pd}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row items-center flex-wrap justify-between gap-3">
        {postHeader.postTags.map((pt, index) => {
          return (
            <div
              className="px-[12px] py-[5px] bg-[#F7F8FA] rounded-3xl text-[12px] text-[#5A6B87] font-medium"
              key={index}
            >
              #{pt}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostHeader;
