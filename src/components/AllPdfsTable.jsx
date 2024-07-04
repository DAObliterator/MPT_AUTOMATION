import React from "react";
import "./AllPdfsTable.css"

const AllPdfsTable = ({ userAndPdfArray }) => {
  return (
    <div id="AllPdfsTable-Main">
      <table id="User-Uploads-Table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Pdf</th>
            <th scope="col">Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {console.log("userAndPdfArray", userAndPdfArray)}
          {Array.isArray(userAndPdfArray) &&
            userAndPdfArray.map(
              (item) =>
                Array.isArray(item.uploadedPdfs) &&
                item.uploadedPdfs.map((pdf, index) => (
                  <tr key={`${item.username}-pdf-${pdf.uploadDate}-${index}`}>
                    <th scope="row"> {item.username} </th>
                    <td> {item.email} </td>
                    <td>
                      {" "}
                      <a
                        href={pdf.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF
                      </a>{" "}
                    </td>
                    <td> {pdf.uploadDate} </td>
                  </tr>
                ))
            )}
        </tbody>
      </table>
    </div>
  );
};

export default AllPdfsTable;
