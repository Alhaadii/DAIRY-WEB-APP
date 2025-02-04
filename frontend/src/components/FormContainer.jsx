import React from "react";

function FormContainer({ children }) {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      {children}
    </div>
  );
}

export default FormContainer;
