import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeTable from "../table/index";
import Form from "../Form/index";

class SearchForm extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    API.employeeSearch().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }

  searchEmployees = (fName) => {
    const filteredEmployees = this.state.employees.filter((employee) => {
      if (employee.name.first.includes(fName)) {
        return employee;
      } else if (employee.name.first.includes(!fName)) {
        return employee;
      }
    });
    this.setState({ filteredEmployees: filteredEmployees });
  };

  handleInputChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredEmployees = this.state.employees.filter(
      (employee) => employee.name.first.toLowerCase().indexOf(name) > -1
    );
    this.setState({
      filteredEmployees: [...filteredEmployees],
    });
  };

  employeeRow = () => {
    let employeeData = null;
    if (this.state.filteredEmployees.length > 0) {
      employeeData = this.state.filteredEmployees.map((employee) => (
        <EmployeeTable
          picture={employee.picture.medium}
          last={employee.name.last}
          first={employee.name.first}
          phone={employee.phone}
          email={employee.email}
        />
      ));
    }
    return employeeData;
  };

  render() {
    return (
      <div>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <table className="table table-hover" id="results-list">
          <tbody>{this.employeeRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default SearchForm;
