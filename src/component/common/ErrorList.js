import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ErrorItem from "./ErrorItem";
import * as errorsAction from "../../actions/errorsActions";

class ErrorList extends Component {
  dismissError = error => {
    this.props.actionErrors.removeError(error);
  };

  dismissAllErrors = () => {
    this.props.actionErrors.removeAllErrors();
  };
  render() {
    return (
      <div className="ErrorDiv">
        <RenderCloseAll
          number={this.props.errors.length}
          dismissAllErrors={this.dismissAllErrors}
        />
        <div className="ErrorList">
          {this.props.errors.map(error => (
            <ErrorItem error={error} dismissError={this.dismissError} />
          ))}
        </div>
      </div>
    );
  }
}

function RenderCloseAll(props) {
  if (props.number > 3) {
    return (
      <div className="deleteAll" onClick={() => props.dismissAllErrors()}>
        Close all ({props.number})
      </div>
    );
  } else {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionErrors: bindActionCreators(errorsAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorList);
