import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as Actions from "../../../store/actions/index";

import CountryEdit from "./CountryEditItem/CountryEditItem";

class CountryEditList extends PureComponent {
  componentWillMount() {
    this.props.countryEditOpen(this.props.match.params._id);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <CountryEdit
          name={this.props.country.name}
          countryID={this.props.country._id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    country: state.country.country,
    erros: state.country.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    countryEditOpen: countryID => dispatch(Actions.countryEditOpen(countryID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CountryEditList);
