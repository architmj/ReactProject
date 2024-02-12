import React, { useState } from "react"
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import HeaderAdmin from "../layout/header";
import Sidebar from "../layout/sidebar";
import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";
import MobileSidebar from "./mobilesidebar";

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = (props) => {



    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
    return (
        <Layout>
            <Sidebar isVisible={isVisible} handlewClick={handlewClick} />
            {/* <MobileSidebar isVisible={isVisible} handlewClick={handlewClick} /> */}
            <Layout className={isVisible ? 'new_layout data' : 'new_layout'}>
                <HeaderAdmin handlewClick={handlewClick} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <Outlet />

                </Content>
            </Layout>
        </Layout>
    )

}
export default MainLayout