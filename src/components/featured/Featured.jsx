import React from "react";
import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <h1 className="featured-title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured-bottom">
          <div className="featured-Chart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={2}/>
          </div>
      </div>
    </div>
  );
};

export default Featured;
