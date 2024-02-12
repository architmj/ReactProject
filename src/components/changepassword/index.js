import React, { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import images from '../../themes/appImage'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import HeaderAdmin from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import MobileSidebar from "../../layout/mobilesidebar";
import appconstant from "../../themes/appconstant";


import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Table, Breadcrumb } from 'antd';
import Textfiled from "../../common";


const { Header, Content, Footer, Sider } = Layout;

const Changepassword = () => {
    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
    useEffect(() => {
        document.title = 'CHESS ARENA';
        window.scrollTo(0, 0)
    }, [])

    return (

        <div>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/dashboard"><FontAwesomeIcon icon={faHome} /></Link></Breadcrumb.Item>
                <Breadcrumb.Item>{appconstant.changepassword}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 class="text-white text-capitalize ps-3">{appconstant.changepassword}</h6>
                        <input type="text" className="search-bar" placeholder="Search" style={{ visibility: "hidden" }} />

                    </div>
                    <div className="wrapper_line">
                        <div className="form-group">
                            <label>{appconstant.Oldpassword}</label>
                            <Textfiled
                                className='form-control'
                                type='password'
                                placeholder='Old Password'
                            />
                        </div>

                        <div className="form-group">
                            <label>{appconstant.NewPassword}</label>
                            <Textfiled
                                className='form-control'
                                type='password'
                                placeholder='New Password'
                            />
                        </div>

                        <div className="form-group">
                            <label>{appconstant.ConfirmNewPassword}</label>
                            <Textfiled
                                className='form-control'
                                type='password'
                                placeholder='Confirm New Password'
                            />
                        </div>



                        <div className="up-cent">
                            <Link to="/login"><button type="submit" className="button-list">{appconstant.buttonupate}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Changepassword;
