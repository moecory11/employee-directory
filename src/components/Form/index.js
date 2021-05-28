import React from "react";
import './style.css'

function Form(props) {
  return (
      <div className="form-style">
            <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type in Employee name"
          id="search"
        />
      </div>
    </form>
      </div>
  
  );
}

export default Form