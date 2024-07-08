import axios from 'axios';
import React, { useEffect } from 'react';
import "./UserPdfTable.css"


const UserPdfTable = ({ yourPdfsArray}) => {

  return (
    <div id="UserPdfTable-Main">
      <h1>All Your Uploads</h1>
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>uploadDate</th>
            <th>fileUrl</th>
          
          </tr>
        </thead>
        <tbody>
          {Array.isArray(yourPdfsArray) &&
            yourPdfsArray.map((pdf , index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{pdf.uploadDate}</td>
                  <td>
                    {" "}
                    <a href={pdf.fileUrl}>URL</a> {}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UserPdfTable