import React from "react";
import SquareIcon from "../icons/squareIcon";
import ListIcon from "../icons/listIcon";

const View = () => {
  return (
    <div className="flex gap-2 items-center text-black">
      View:
      <button className="hover:text-danger text-danger">
        <SquareIcon />
      </button>
      <button className="hover:text-danger ">
        <ListIcon />
      </button>
    </div>
  );
};

export default View;
