import React from "react";
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReorderIcon from '@mui/icons-material/Reorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LogoAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
             <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
              <PersonIcon className="icon"/>
            <span>User</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon"/>
            <span>Product</span>
          </li>
          <li>
          <ReorderIcon className="icon"/>
            <span>Order</span>
          </li>
          <li>
          <LocalShippingIcon className="icon"/>  
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
              <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsNoneIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <WysiwygIcon className="icon"/>
            <span>System</span>
          </li>
          <li>
          <PsychologyOutlinedIcon className="icon"/>
            <span>Log</span>
          </li>
          <li>
          <SettingsIcon className="icon"/>
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
          <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
