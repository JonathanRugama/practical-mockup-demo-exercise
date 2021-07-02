import React from 'react';
import CreateEmployeeForm from '../create-form-employee';

class CreateEmployee extends React.Component {

    state = {
        
        form: {
            firstName:'',
            lastName:'',
            email:''
        }
    }

    handleChange = (e) => {
        /* const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value */
        this.setState({
           /*  form:nextForm, */
           form: {
               /* Dejamos caer todos los valores anteriores */
               ...this.state.form,
               /* Y añadimos el adicional o sobreescribimos */
               [e.target.name]: e.target.value,
           }
            
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form was submitted');
    }

    
    render() {
        return(
            <section className="container-form">
                <CreateEmployeeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                />
            </section>
        );
    }
}

export default CreateEmployee;