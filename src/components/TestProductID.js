import React, { Component } from "react";
import { useParams } from "react-router-dom";


class TestProductID extends Component {
  render() {

    
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>User id is {id}</h1>
      </div>
    );
  }
}

export default TestProductID;