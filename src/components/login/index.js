import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { FontAwesomeIcon, fadashcube } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Table } from "antd";
import Textfiled from "../../common";
import { postAdminLoginInitiate, postForgetPasswordInitiate, changePasswordInitiate } from "../../redux/action/auth";

const { Header, Content, Footer, Sider } = Layout;

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const handleChange = (e) => {
    console.log("this is event = ", e.target.name);
    if (e.target.name == "username") {
      setInputText(e.target.value);
    } else {
      setInputText1(e.target.value);
    }
  };
  const handleSubmit = () => {
    console.log("inputText = ", inputText, inputText1);
    // dispatch(postAdminLoginInitiate({ userName: inputText, password: inputText1, navigation: navigate }));
    // dispatch(postForgetPasswordInitiate({ userName: inputText, navigation: navigate }));
    // dispatch(changePasswordInitiate({ userName: inputText, navigation: navigate }));
    if (inputText == "KLPD@gmail.com" && inputText1 == "123456") {
      localStorage.setItem("credentials", JSON.stringify({ userName: inputText, password: inputText1 }));
      navigate("/dashboard");
    }
  };
  useEffect(() => {
    document.title = "CHESS ARENA";
  }, []);

  return (
    <div className="image-bg">
      <div className="page-header">
        {/* <div className="line_true">
                    <div className="content-e ">
                        <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                           
                        <h6 class="text-white text-capitalize ps-3 text-center">Login</h6>
                        </div>
                        <div className="text-center cost">
                                    <img src={images.logo} />
                                   
                            </div>
                        <div className="wrapper_line">

                            <div className="form-group">

                                <Textfiled
                                    id='filled-basic'
                                    label='Email Address'
                                    variant='standard'
                                    className='filed-control'
                                />
                            </div>

                            <div className="form-group">
                                <Textfiled
                                    type='password'
                                    id='filled-basic'
                                    label='Password'
                                    variant='standard'
                                    className='filed-control'
                                    
                                />
                            </div>
                            <div className="forrgot"><Link to="/forgotpassword">Forgot Password?</Link></div>
                             <div className='text-center_login'>
                            <Link to="/dashboard"><button type="submit" className="button-list">Login</button>
                            </Link>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>


                </div> */}

        <div className="main-div">
          {/* <div className="bg-login-image">
             <img src={images.photo}/> </div> */}
          <div className="login-form">
            <div>
              {" "}
              <img src={images.login} />
            </div>
            <h3>Admin Login </h3>

            <div className="user">
              <input onChange={(e) => handleChange(e)} name="username" value={inputText} type="email" placeholder="Email Address" />
              <input onChange={(e) => handleChange(e)} name="password" type="password" value={inputText1} placeholder="Password" />
            </div>

            <div className="login-link">
              <button onClick={handleSubmit} className="login-link">
                Login
              </button>
            </div>
            {localStorage.getItem("username") && (
              <div>
                Name: <p>{localStorage.getItem("username")}</p>
              </div>
            )}
            {localStorage.getItem("password") && (
              <div>
                Password: <p>{localStorage.getItem("password")}</p>
              </div>
            )}
            <div className="forgot-link">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
