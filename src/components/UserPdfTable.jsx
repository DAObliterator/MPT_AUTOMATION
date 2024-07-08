import axios from 'axios';
import React, { useEffect } from 'react';


const UserPdfTable = ({ yourPdfsArray}) => {

  return (
    <div id='UserPdfTable-Main' >
      <table>
        <thead>
          <tr>
            <th>
              uploadDate
            </th>
            <th>
              fileUrl
            </th>
          </tr>
        </thead>
      </table>
      {Array.isArray(yourPdfsArray) && yourPdfsArray.map((pdf) => {
        return (
          <tr>
            <td>{pdf.uploadDate}</td>
            <td>{pdf.fileUrl}</td>
          </tr>
        )
      })}
    </div>
  )
}

export default UserPdfTable