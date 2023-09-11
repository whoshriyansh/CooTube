import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-60 m-1">
      <img
        alt={title}
        src={thumbnails.high.url}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-700">{channelTitle}</p>
        <p className="text-sm text-gray-600">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
