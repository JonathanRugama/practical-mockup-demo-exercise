import React from 'react';
import EmployeeListItem from './employee-list-item';
class EmployeesList extends React.Component  {

    render() {
        if(this.props.employees.length===0) {
            return (
                <div>
                    <h3>No employees were found</h3>
                </div>
            );
        }
        return (
           
            
            <tbody className="table-body">
                <tr className="table-row">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            
                {this.props.employees.map(employee =>{
                    return (
                    <EmployeeListItem employee={employee}/> 
                    );
                    
                })}       
            </tbody>
        );
        
    }
    
}
export default EmployeesList;