import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();

      setVideos(json.items || []); // Ensure videos is an array or initialize as empty array if undefined
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]); // Set empty array in case of error
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      {videos.length === 0 && <p>No videos available</p>}
    </div>
  );
};

export default VideoContainer;
