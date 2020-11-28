import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function Name(props) {
  return (
    <div className="form-group">
      <h2>Your Name</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Email(props) {
  return (
    <div className="form-group">
      <h2>Your Email</h2>
      <input className="form-control" {...props} />
    </div>
  );
}


export function Balance(props) {
  return (
    <div className="form-group">
      <h2>Your initial deposit</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="1" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
