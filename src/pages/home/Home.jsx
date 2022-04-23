import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
        </div>
        <div className="charts">
             <Featured/>
             <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitles">latest transaction</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};  

export default Home;
