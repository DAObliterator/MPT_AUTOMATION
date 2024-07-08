import React, { useState } from "react";
import "./UploadedPdfs.css";
import UserPdfTable from "../components/UserPdfTable";

export const UploadedPdfs = () => {
  const [yourPdfsArray, setYourPdfsArray] = useState([]);

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/viewYourUploads"
          : import.meta.env.VITE_API_PROD + "/viewYourUploads",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setYourPdfsArray((prevArray) =>
          prevArray.concat(response.data.uploadedPdfs)
        );
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  return (
    <div id="Uploaded-Pdfs-Main">
      <UserPdfTable yourPdfsArray={yourPdfsArray}></UserPdfTable>
    </div>
  );
};
