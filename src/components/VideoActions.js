import React from "react";

const VideoActions = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-black mt-1">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2">
          <img src="./images/like.png" alt="Like Icon" className="w-5 h-5" />
          <span>100K</span>
        </button>

        <button className="flex items-center space-x-2">
          <img
            src="./images/dislike.png"
            alt="Dislike Icon"
            className="w-5 h-5"
          />
          <span>10K</span>
        </button>

        <button className="flex items-center space-x-2">
          <span className="bg-[#dc2626] text-white p-2 rounded-full">
            Subscribe
          </span>
        </button>
      </div>

      <div>
        <button className="flex items-center space-x-2">
          <img src="./images/share.png" alt="Share Icon" className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default VideoActions;
