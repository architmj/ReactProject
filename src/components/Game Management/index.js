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



const GameManagement = () => {
    const disableModel = (record) => {

        Modal.confirm({
            title: "Block",
            content: `Are you sure, you want to block this client?`,
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
        players: 'UserA Vs UserB',
        type: ' Random',
        time: "2:00 PM ",
        endtime: '2:15 PM ',
        status: 'Draw',

    },
    {
        key: '1',
        players: 'UserA Vs UserB',
        type: ' Tournament',
        time: "2:00 PM ",
        endtime: '2:15 PM ',
        status: 'Draw',

    },
    {
        key: '1',
        players: 'UserA Vs UserB',
        type: ' Random',
        time: "2:00 PM ",
        endtime: '2:15 PM ',
        status: 'Draw',

    },
    {
        key: '1',
        players: 'UserA Vs UserB',
        type: ' Tournament',
        time: "2:00 PM ",
        endtime: '2:15 PM ',
        status: 'Draw',

    },
    {
        key: '1',
        players: 'UserA Vs UserB',
        type: ' Random',
        time: "2:00 PM ",
        endtime: '2:15 PM ',
        status: 'Draw',

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
        title: 'Players ',
        dataIndex: 'players',
        key: 'players',
        sorter: true,
    },
    {
        title: 'Game Type ',
        dataIndex: 'type',
        key: 'type',
        sorter: true,
    },
    {
        title: 'Start Time',
        dataIndex: 'time',
        key: 'time',
        sorter: true,
    },
    {
        title: 'End Time',
        dataIndex: 'endtime',
        key: 'endtime',
        sorter: true,
    },
    {
        title: ' Game Status',
        dataIndex: 'status',
        key: 'status',
        sorter: true,
    },





    {
        title: 'Action',
        dataIndex: 'Posted',
        key: 'Posted',
        render: () => {
            return (

                <div>
                    <Link to="/gamedetails">
                        <button type="submit" >{appconstant.view}</button>
                    </Link>
                    {/* <Link to="/edituserdetails">
                        <button type="submit" >{appconstant.edit}</button>
                    </Link> */}
                    {/* <button type="submit" onClick={disableModel} >{appconstant.block}</button> */}

                    {/* <button type="submit" onClick={deleteModel} >{appconstant.delete}</button> */}
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
                    {appconstant.gameManagement}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 class="text-white text-capitalize ps-3">{appconstant.gameManagement}</h6>
                        <input type="text" className="iocn-search  search-bar" placeholder="Search" />

                    </div>
                    {/* <div >
                        <Link to="/addclient"><button type="submit" className="button-list">{appconstant.add}</button>
                        </Link>

                    </div> */}
                    <Table dataSource={dataSource} columns={columns} showSorterTooltip={false} />
                </div>
            </div>

            {/* <Modal title="Delete"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>


                <div className="text-center  model1">
                    <p>Are you sure want to delete?</p>
                </div>
                <div className="text-center  model1">
                </div>
            </Modal> */}

        </div>

    )
}
export default GameManagement

