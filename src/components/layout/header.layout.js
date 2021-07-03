import React from 'react';
import '../assets/css/header.layout.css';
import { Link } from 'react-router-dom';

const HeaderLayout = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <div className= "navigation-title">
                <Link  to="/">Manage Employees</Link>
                </div>
                <div className="navigation-filter">
                    
                </div>
                <div className="button-container">
                    <Link className="button-create" to="/create-employee">+Create new Employee</Link>
                </div>
            </nav>
        </header>
    )

}
export default HeaderLayout;