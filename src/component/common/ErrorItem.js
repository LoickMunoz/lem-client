import React from "react";

const ErrorItem = ({ error, dismissError, number, dismissAllErrors }) => {
  return (
    <div className="ErrorItem" onClick={() => dismissError(error)}>
      <p>{error.message}</p>
      <p className="close">&#10006;</p>
    </div>
  );
};

export default ErrorItem;
