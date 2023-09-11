import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-[#dc2626] px-5 py-2 m-2 rounded-lg text-white font-bold">
      {label}
    </button>
  );
};

export default Button;
