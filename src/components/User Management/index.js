import React, { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import images from '../../themes/appImage'
import { DatePicker, Space } from 'antd';


import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import HeaderAdmin from "../../layout/header";

import Sidebar from "../../layout/sidebar";
import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Table, Breadcrumb, Modal } from 'antd';
import MobileSidebar from "../../layout/mobilesidebar";
import appconstant from "../../themes/appconstant";

const { RangePicker } = DatePicker;
const { Header, Content, Footer, Sider } = Layout;



const UserManagement = () => {
    const disableModel = (record) => {

        Modal.confirm({
            title: "Block",
            content: `Are you sure, you want to block this user?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                // isInternetConnected(history) &&
                //     dispatch(enableDisableAction(record._id, !record.isBlock, history, search, offset, limit, sortBy, order, status))
            },
            onCancel() {

            },
            className: "new-button"
        });
    };
    const disableModel2 = (record) => {

        Modal.confirm({
            title: "Reset Password",
            content: `Are you sure, you want to reset password?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                // isInternetConnected(history) &&
                //     dispatch(enableDisableAction(record._id, !record.isBlock, history, search, offset, limit, sortBy, order, status))
            },
            onCancel() {

            },
            className: "new-button"
        });
    };


    const dataSource = [{

        key: '1',

        name: 'John Doe',
        email: "John@yopmail.com ",
        games: "5 ",
        win: "2",
        lose: "3",
    },
    {
        key: '1',

        name: 'John Doe',
        email: "John@yopmail.com ",
        games: "5 ",
        win: "2",
        lose: "3",

    },
    {
        key: '1',

        name: 'John Doe',
        email: "John@yopmail.com ",
        games: "5 ",
        win: "2",
        lose: "3",

    },
    {
        key: '1',

        name: 'John Doe',
        email: "John@yopmail.com ",
        games: "5 ",
        win: "2",
        lose: "3",


    },
    {
        key: '1',

        name: 'John Doe',
        email: "John@yopmail.com ",
        games: "5 ",
        win: "2",
        lose: "3",


    },


    ];

    const columns = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (index + 1)
    },

    {
        title: 'Full Name  ',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
    },



    {
        title: ' Total Games Played',
        dataIndex: 'games',
        key: 'games',
        sorter: true,
    },

    {
        title: '  Games Win ',
        dataIndex: 'win',
        key: 'win',
        sorter: true,
    },

    {
        title: '   Games Lose ',
        dataIndex: 'lose',
        key: 'lose',
        sorter: true,
    },


    {
        title: 'Action',
        dataIndex: 'Posted',
        key: 'Posted',
        render: () => {
            return (

                <div>
                    <Link to="/userDetails">
                        <button type="submit" >{appconstant.view}</button>
                    </Link>
                    <Link to="/editUserDetails">
                        <button type="submit" >{appconstant.edit}</button>
                    </Link>
                    <button type="submit" onClick={disableModel} >{appconstant.block}</button>

                    <button className="pass-gen" type="submit" onClick={disableModel2} >{appconstant.respass}</button>
                </div>
            )
        }
    },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [isModalVisibleBlock, setIsModalVisibleBlock] = useState(false);
    const showModalBlock = () => {
        setIsModalVisibleBlock(true);
    };

    const handleOkBlock = () => {
        setIsModalVisibleBlock(false);
    };

    const handleCancelBlock = () => {
        setIsModalVisibleBlock(false);
    };


    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
    useEffect(() => {
        document.title = 'CHESS ARENA';
    }, [])



    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/dashboard"><FontAwesomeIcon icon={faHome} /></Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    {appconstant.userManagement}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 class="text-white text-capitalize ps-3">{appconstant.userManagement}</h6>
                        <input type="text" className="iocn-search  search-bar" placeholder="Search" />

                    </div>
             
                    <Table dataSource={dataSource} columns={columns} showSorterTooltip={false} />
                </div>
            </div>


        </div>

    )
}
export default UserManagement 
