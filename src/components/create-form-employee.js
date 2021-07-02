import React from 'react';

class CreateEmployeeForm extends React.Component {
    state={};
    render () {
        return (
        <form onSubmit={this.props.onSubmit} className="form-solution" action="">
            <label className="form-solution__item" htmlFor="">
                <span>First Name</span>
                <input  
                onChange={this.props.onChange}  
                type="text" 
                placeholder="Enter your First name"
                name="firstName"
                value={this.props.formValues.firstName}/>
            </label>
            <label className="form-solution__item" htmlFor="">
                <span>Last Name</span>
                <input
                onChange={this.props.onChange} 
                type="text" 
                placeholder="Enter your Last Name"
                name="lastName"
                value={this.props.formValues.lastName}/>
            </label>
            <label className="form-solution__item" htmlFor="">
                <span>E-mail</span>
                <input 
                onChange={this.props.onChange}
                type="text" 
                placeholder="yourmail@mail.com"
                name="email"
                value={this.props.formValues.email}/>
            </label>
            <button onClick={this.handleClick}>Guardar</button>
        </form>
        );
    }
}

export default CreateEmployeeForm;