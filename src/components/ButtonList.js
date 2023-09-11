import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-3 ml-3">
      <Button label="Home" />
      <Button label="Trending" />
      <Button label="Subscriptions" />
      <Button label="Library" />
      <Button label="History" />
      <Button label="Your Videos" />
      <Button label="Liked Videos" />
      <Button label="Music" />
      <Button label="Gaming" />
      <Button label="News" />
    </div>
  );
};

export default ButtonList;
