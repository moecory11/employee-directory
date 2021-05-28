import React from "react";

function EmployeeTable(props) {
  return (
        <tr>
          <th scope="row">*</th>
          <td>
           <img src={props.picture} alt="" key={props.id}></img> 
          </td>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.key}</td>
        </tr>
  );
}

export default EmployeeTable;
