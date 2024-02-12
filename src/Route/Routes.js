import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Changepassword from "../components/changepassword";
import Dashboard from "../components/dashboard";
import ForgotPassword from "../components/forgotpassword";
import Login from "../components/login";

import MainLayout from "../layout/mainlayout";



// import UserManagement from "../components/User Management";
import GameManagement from "../components/Game Management";
import NotifcationManagement from "../components/Notification Management";
import NotificationManagement from "../components/Notification Management";
import TournamentManagement from "../components/Tournament Management/tournamentManagement";
import UserManagement from "../components/User Management";



const RoutesNew = () => {


    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to={'login'} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/changepassword" element={<Changepassword />} />
                        <Route path="/usermanagement" element={<UserManagement />} />
                        <Route path="/gamemanagement" element={<GameManagement />} />
                        <Route path="/notificationmanagement" element={<NotificationManagement />} />
                        <Route path="/tournamentmanagement" element={<TournamentManagement />} />


                    </Route>
                </Routes>
            </Router>
           
        </div>
    )

}
export default RoutesNew;


