import React from 'react';
import './Table.css';

export default props => (
  
  <table className="table" style={{ cursor: "pointer" }}>
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "id")}>
          ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "firstName")}>
          Имя{" "}
          {props.sortField === "firstName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "lastName")}>
          Фамилия{" "}
          {props.sortField === "lastName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "email")}>
          E-mail{" "}
          {props.sortField === "email" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "phone")}>
          Телефон{" "}
          {props.sortField === "phone" ? <small>{props.sort}</small> : null}
        </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr
          key={item.id + item.phone}
          onClick={props.onRowSelect.bind(null, item)}
        >
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td className="del-cell">
          <button type="button" style={{"background":"rgb(40, 3, 253)","color":"white","border-radius":"5px","border":"0px"}}>X</button>
        </td>
        </tr>
      ))}
    </tbody>
  </table>
);