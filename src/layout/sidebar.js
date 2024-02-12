import React from "react";
import { Layout, Menu } from 'antd';
import { useLocation } from "react-router"
import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom";
import images from "../themes/appImage";
import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faBook, faUnlock, faSignOutAlt, faGamepad, faQuestionCircle, faAngleLeft, faHandshake, faCog, faLayerGroup, faUsers, faSearchPlus, faAdjust, faEdit, faMale, faAngleRight, faCreditCard, faTrophy, faMoney, } from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Footer, Sider } = Layout;



const Sidebar = (props) => {
  let navigate = useNavigate();
  let location = useLocation();


  const onMenuClick = (e) => {
    navigate(e.key)
    // history.push(e.key);
  };


  let activeKey = ""
  switch (location.pathname) {
    case "/dashboard":
      activeKey = "/dashboard"
      break;


    case "/changepassword":
      activeKey = "/changepassword"
      break;

    case "/usermanagement":
      activeKey = "/usermanagement"
      break;

   
  
    case "/gamemanagement":
      activeKey = "/gamemanagement"
      break;
  
    case "/tournamentmanagement":
      activeKey = "/tournamentmanagement"
      break;
 
  
    case "/notificationmanagement":
      activeKey = "/notificationmanagement"
      break;
   
  }

  return (
    <Sider
      // breakpoint="lg"
      className={props.isVisible ? 'sider_left new closedd' : 'sider_left new'}
      collapsedWidth="0"
      width={props.isVisible ? '108' : '250'}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">
        <Link to="/dashboard">
          <img src={images.login2} />
        </Link>

      </div>
      <div className="admin-text">
        <h2>Admin Panel</h2>
      </div>



      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[activeKey]}
        selectedKeys={[activeKey]}
        onClick={(e) => onMenuClick(e)}>


        <Menu.Item key="/dashboard">
          <Link to="">
            <FontAwesomeIcon icon={faHome} />
            <span className="line_dash">Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/usermanagement">
          <FontAwesomeIcon icon={faUser} />
          <span className="line_dash"> User Management</span>
        </Menu.Item>

        <Menu.Item key="/gamemanagement">
          <FontAwesomeIcon icon={faGamepad} />
          <span className="line_dash">Game Management</span>
        </Menu.Item>


        <Menu.Item key="/tournamentmanagement">

          <FontAwesomeIcon icon={faTrophy} />
          <span className="line_dash"> Tournament Management</span>
        </Menu.Item>


      



        <Menu.Item key="/notificationmanagement">

          <FontAwesomeIcon icon={faBell} />
          <span className="line_dash">Notification Management
          </span>
        </Menu.Item>





        <Menu.Item key="/changepassword">
          <FontAwesomeIcon icon={faUnlock} />
          <span className="line_dash">Change Password</span>
        </Menu.Item>


        <Menu.Item key="/login">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="line_dash"> Logout</span>
        </Menu.Item>

      </Menu>
      <div className="angle-btn">


        <button type="submit" onClick={props.handlewClick} className=" btn "> <FontAwesomeIcon className="icon-angle-left" icon={props.isVisible ? faAngleRight : faAngleLeft} /></button></div>
    </Sider>

  )
}
export default Sidebar;