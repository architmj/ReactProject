import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HeaderAdmin from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { FontAwesomeIcon, fadashcube } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Table } from "antd";
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common";
import { postForgetPasswordInitiate } from "../../redux/action/auth";

const { Header, Content, Footer, Sider } = Layout;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(postForgetPasswordInitiate({ userName: inputText, password: inputText1, navigation: navigate }));
  };
  useEffect(() => {
    document.title = "CHESS ARENA";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-bg">
      <div className="page-header">
        {/* <div className="line_true">
                    <div className="content-e ">
                        <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3"  style={{display:'flex'}}>
                            <h6 class="text-white line_element text-capitalize ps-3 d-flex">
                                <Link to="/login"> <FontAwesomeIcon icon={faArrowLeft} /></Link>{appconstant.ForgotPassword}</h6>
                                <h6 class="text-white text-capitalize ps-3 text-center">Forgot Password</h6>
                        </div>
                        <div className="wrapper_line">
                            <div className="text-center cost">
                               
                                    <img src={images.logo} />
                                    <h6 class="text-white text-capitalize ps-3"></h6>
                            </div>
                            <div className="form-group">
                                <label>{appconstant.EmailAddress}</label>
                                <div className="form-group">

                                <Textfiled
                                    id='filled-basic'
                                    label='Email Address'
                                    variant='standard'
                                    className='filed-control'
                                />
                            </div>
                            </div>
                            <div className='text-center_login'>
                            <Link to="/login"><button type="submit" className="button-list">Send</button>
                            </Link>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>


                </div> */}

        <div className="main-div">
          {/* <div className="bg-login-image">
                        <img src={images.login2} /> </div> */}
          <div className="login-form mt-top">
            <div className="back">
              <Link to="/login">
                {" "}
                <button type="submit" className=" btn2  ">
                  {" "}
                  <FontAwesomeIcon className="icon-angle-left" icon={faAngleLeft} />
                </button>
              </Link>
            </div>
            <div>
              {" "}
              <img src={images.login} />
            </div>
            <h4>Forgot Password </h4>

            <div className="user">
              <input onChange={(e) => handleChange(e)} name="username" type="email" value={inputText} placeholder="Email Address" />
              {/* <input type= "password" placeholder="Password"/> */}
            </div>

            {/* <div className=" custom-checkbox ">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                 <label for="vehicle1">Remember Me</label>



                </div> */}
            <div className="login-link">
              {/* <Link to="/login">Send</Link> */}
              <button onClick={handleSubmit} className="login-link">
                Send
              </button>
            </div>

            {/* <div className="forgot-link">
                        <Link to="/forgotpassword" >Forgot Password?</Link>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
