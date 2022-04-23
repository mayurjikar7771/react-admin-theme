import React from "react";
import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featuredClass">
      <div className="featured-top">
        <h1 className="featured-title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured-bottom">
        <div className="featured-Chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title-featured">Total sales made today</p>
        <p className="amount-featured">$420</p>
        <p className="desc-featured">
          Previous transaction processing.Last payment may nit be include
        </p>
        <div className="featured-summary">
          <div className="featured-item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="featured-item">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="featured-item">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
