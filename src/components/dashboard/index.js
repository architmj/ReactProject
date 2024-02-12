import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu, Tabs, Table } from "antd";
import axios from "axios";

import { BrowserRouter as Router, Link } from "react-router-dom";
import HeaderAdmin from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { FontAwesomeIcon, fadashcube } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers, faGamepad } from "@fortawesome/free-solid-svg-icons";
import MobileSidebar from "../../layout/mobilesidebar";
import { Breadcrumb } from "antd";
import images from "../../themes/appImage";
import appconstant from "../../themes/appconstant";
import { getUsersCountInitiate } from "../../redux/action/dashboard";

const Dashboard = (props) => {
  const dispatch = useDispatch();

  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };
  useEffect(() => {
    document.title = "CHESS ARENA";
    window.scrollTo(0, 0);
    dispatch(getUsersCountInitiate());
    // axios
    //   .post("http://192.168.3.176:5006/api/v1/admin/login", {
    //     // headers: {
    //     //   Authorization: "sdfsdfdsfsdfdsf",
    //     // },
    //     email: "shubham@yopmail.com",
    //     password: "123456",
    //   })
    //   // .get("192.168.3.176:5006/api/v1/admin/dashboard", {
    //   //   name: "shubham",
    //   // })
    //   .then((res) => {
    //     console.log("this is result = ", res);
    //   });
  }, []);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          {" "}
          <FontAwesomeIcon icon={faHome} />
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="main-div-2 dashboard ">
        <div className="datacenter user-valid-text">
          <div className="image-fle">
            <div className="total-num">
              <h1>8</h1>
            </div>
            <div>
              <img src={images.download} style={{ width: "84px", Height: "150px" }} />
            </div>
          </div>
          <div className="user-text">
            <p>Total number of users registered this week.</p>
          </div>
        </div>

        <div className="datacenter user-valid-text">
          <div className="image-fle">
            <div className="total-num">
              <h1>10</h1>
            </div>
            <div>
              <img src={images.down} style={{ width: "84px", Height: "150px" }} />
            </div>
          </div>
          <div className="user-text">
            <p>Total number of users registered in last month.</p>
          </div>
        </div>

        <div className="datacenter user-valid-text">
          <div className="image-fle">
            <div className="total-num">
              <h1>10</h1>
            </div>
            <div>
              <img src={images.user5} style={{ width: "84px", Height: "150px" }} />
            </div>
          </div>
          <div className="user-text">
            <p>Total number of users registered in last 3 months.</p>
          </div>
        </div>

        <div className="datacenter user-valid-text">
          <div className="image-fle">
            <div className="total-num">
              <h1>10</h1>
            </div>
            <div>
              <img src={images.user6} style={{ width: "84px", Height: "150px" }} />
            </div>
          </div>
          <div className="user-text">
            <p>Total number of users registered in last 6 months.</p>
          </div>
        </div>

        <div className="datacenter user-valid-text">
          <div className="image-fle">
            <div className="total-num">
              <h1>10</h1>
            </div>
            <div>
              <img src={images.user7} style={{ width: "84px", Height: "150px" }} />
            </div>
          </div>
          <div className="user-text">
            <p>Total number of users registered in last year.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
