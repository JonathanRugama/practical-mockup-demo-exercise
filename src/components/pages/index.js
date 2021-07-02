import React from 'react';
import api from '../../api';
import EmployeesList from '../employee-list';
class IndexPage extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };


    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error:null})
        try {
            const data = await api.employees.list();
            this.setState({loading: false, data: data})
        }catch(error) {
            this.setState({loading:false, error: error})
        }
    }
    render () {
        if(this.state.loading===true) {
            return 'Loading'
        }
        if(this.state.error) {
            return `Error: ${this.state.error.message}`
        }
        return (
            <div className="list-container">
                <h2 className="list-title">Employees</h2>
                <table className="table-list">
                    <EmployeesList employees={this.state.data}/>          
                </table>
            </div>
        )
    }
}

export default IndexPage;