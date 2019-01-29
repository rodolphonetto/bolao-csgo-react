import React, { Component } from "react";
import { connect } from "react-redux";


export class CountryEdit extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryEdit);
