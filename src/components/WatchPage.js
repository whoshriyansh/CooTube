import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import VideoActions from "./VideoActions";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col mt-5">
      <div className="flex ">
        <div className="px-5 ">
          <iframe
            width="1200"
            height="650"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoActions />
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
