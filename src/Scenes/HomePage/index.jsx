// library imports
import { ChevronLeft, Bell } from "lucide-react";

// local imports
import { postData } from "../../data/postData";
import Post from "./components/Post";

const HomePage = () => {
  return (
    <div className="border min-w-[375px] max-w-[500px] bg-white">
      <div className="p-3 mb-4">
        <div className="flex flex-row items-center justify-between">
          <ChevronLeft size={24} className="cursor-pointer" />

          <span className="text-lg font-bold cursor-pointer">자유톡</span>

          <Bell size={24} color="#AFB9CA" className="cursor-pointer" />
        </div>
      </div>

      {postData.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default HomePage;
