import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// function AxiosFile() {
//   let config = {
//     headers: { Authorization: "sdfsdfsdfsdfsdf" },
//   };

//   let data = {
//     HTTP_CONTENT_LANGUAGE: self.language,
//   };
//   useEffect(() => {
//     axios
//       .get("http://192.168.3.176:5006/api/v1/admin/login", {
//         headers: {
//           Authorization: "Bearer " + "sdfsdfsdfdsf", //the token is a variable which holds the token
//         },
//       })

//       .then((res) => {
//         console.log(res);
//       });
//   }, []);
//   return <div>axios</div>;
// }
export const loginApi = (data) => {
  return axios.post("http://192.168.3.176:5006/api/v1/admin/login", {
    // headers: {
    //   Authorization: "sdfsdfdsfsdfdsf",
    // },
    email: data.userName,
    password: data.password,
  });
};
export const forgetPassword = (data) => {
  return axios.post("http://192.168.3.176:5006/api/v1/admin/forgotPassword", {
    email: data.userName,
  });
};

// export const changePassword = (data) => {
//   return axios.put("http://192.168.3.176:5006/api/v1/admin/change/password", {
//     oldPassword: "123456",
//     newPassword: "12345678",
//     confirmNewPassword: "12345678",
//   });
// };
export const logoutApi = (data) => {
  return axios.put("http://192.168.3.176:5006/api/v1/admin/logout", {});
};

export const dashBoard = (data) => {
  return axios.get("http://192.168.3.176:5006/api/v1/admin/dashboard", {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQzZGVlYWVhOTFmMzYzZWI3MTViZjkiLCJwYXNzd29yZCI6IiQyYiQxMCRNVU1Pdmkua0o3dFJqVnBOMTdBU0suZnZCeW5VQnJWOU9LN212MXVxRlR5TVYyY1Y0WDFwZSIsImRldmljZVRva2VuIjoiMTY4NDMxMjAwODExMSIsImlhdCI6MTY4NDMxMjAwOH0.rqe6ys9yLODrLq7iT3DJaidvsj4YThJZfw9U29w_XNA", //the token is a variable which holds the token
    },
  });
};



// export default AxiosFile;
