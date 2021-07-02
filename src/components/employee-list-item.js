import React from 'react';

const EmployeeListItem = (props) => {

    return (
    <tr className="table-row">
            <td>{props.employee.name}</td>
            <td>{props.employee.email}</td>
            <td>edit - delete</td>
    </tr> 
    )
}
export default EmployeeListItem;