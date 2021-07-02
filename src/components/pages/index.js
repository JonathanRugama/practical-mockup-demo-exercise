import React from 'react';

const IndexPage = () => {

    return (
    <div className="list-container">
        <h2 className="list-title">Employees</h2>
        <table className="table-list">
           
            <tbody className="table-body">
                <tr className="table-row">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                <tr className="table-row">
                    <td>Thomas Hardy</td>
                    <td>thomashardy@mail.com</td>
                    <td>edit - delete</td>
                </tr>
                <tr className="table-row">
                    <td>Thomas Hardy</td>
                    <td>thomashardy@mail.com</td>
                    <td>edit - delete</td>
                </tr>
               
            </tbody>
        </table>
    </div>
    )
}

export default IndexPage;