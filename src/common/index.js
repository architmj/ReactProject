import React from "react";
import TextField from "@mui/material/TextField";

const Textfiled = (props) => {
  const { type, className, placeholder, disabled, defaultValue } = props;

  return (
    <div className="input_fields">
      <input type={type} placeholder={placeholder} defaultValue={defaultValue} className={className} disabled={disabled} />
    </div>
  );
};

export default Textfiled;
