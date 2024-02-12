import React, { useState } from "react"
import { Layout, Menu } from 'antd';
import { useLocation } from "react-router"
import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom";
import images from "../themes/appImage";
import { Drawer } from 'antd';
import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUnlock, faSignOutAlt, faGamepad, faQuestionCircle, faHandshake, faCog } from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Footer, Sider } = Layout;


const MobileSidebar = (props) => {

  console.log("res = = ", props.isVisible)
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


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
    case "/usermanagement":
      activeKey = "/usermanagement"
      break;
    case "/userview":
      activeKey = "/usermanagement"
      break;
    case "/useredit":
      activeKey = "/usermanagement"
      break;
    case "/gameplayed":
      activeKey = "/usermanagement"
      break;
    case "/gameorganised":
      activeKey = "/usermanagement"
      break;
    case "/adduser":
      activeKey = "/usermanagement"
      break;
    case "/newmanagement":
      activeKey = "/newmanagement"
      break;

    case "/fandom":
      activeKey = "/fandom"
      break;
    case "/fandomquiz":
      activeKey = "/fandom"
      break;
    case "/fandomeditquiz":
      activeKey = "/fandom"
      break;

    case "/purchase":
      activeKey = "/purchase"
      break;

    case "/changepassword":
      activeKey = "/changepassword"
      break;
  }




  return (

    <Drawer placement="right"
      onClose={props.handlewClick}
      visible={props.isVisible}
      onClick={() => console.log("yes = = ")}>
      <Sider
        // breakpoint="lg"
        className="sider_left"
        collapsedWidth="0"
        width="250"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <Link to="/dashboard">
            <img src={images.logo} />
          </Link>
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

          <Menu.Item key="/fandom">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="line_dash">Fandom Quiz Management</span>
          </Menu.Item>


          <Menu.Item key="/purchase">

            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="line_dash">In-App purchase Management</span>
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

      </Sider>
    </Drawer>

  )
}
export default MobileSidebar;