import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import AllPdfsTable from "../components/AllPdfsTable";
import axios from "axios";

export const AdminDashboard = () => {
  const [userAndPdfArray, setUserAndPdfArray] = useState([]);

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/viewUserUploads"
          : import.meta.env.VITE_API_PROD + "/viewUserUploads",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUserAndPdfArray((prevArray) => 
          prevArray.concat(response.data.userAndPdfArray)
        );
      })
      .catch((error) => {
        console.log(error, " --happened while retreiving user uploads \n");
      });
  }, []);

  useEffect(() => {
    console.log(userAndPdfArray, " this shittt ");
  }, [setUserAndPdfArray]);

  return (
    <div id="AdminDashboard">
      <h1>User Uploads</h1>
      <AllPdfsTable userAndPdfArray={userAndPdfArray}></AllPdfsTable>
    </div>
  );
};
