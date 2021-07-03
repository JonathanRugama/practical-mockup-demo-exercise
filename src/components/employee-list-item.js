import React from 'react';
import { Link } from 'react-router-dom';
const EmployeeListItem = (props) => {

    return (
    <tr className="table-row">
            <td>{props.employee.name}</td>
            <td>{props.employee.email}</td>
            <td><Link to={`/employee/${props.employee.id}/edit`}>Edit</Link> - delete</td>
    </tr> 
    )
}
export default EmployeeListItem;