import React from 'react';
import CreateEmployeeForm from '../create-form-employee';
import api from '../../api';

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


    handleSubmit = async (e) => {
        
        e.preventDefault();
        this.setState({loading:true, error:null})

         let employee = {
            name: `${this.state.form.firstName} ${this.state.form.lastName}`,
            email: this.state.form.email 
        }                    
        try {
            await api.employees.create(employee);
            this.setState({loading:false})
            this.props.history.push('/')
        }catch (error) {
            this.setState({loading:false, error:error})
        }
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