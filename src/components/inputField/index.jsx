import React from "react";
import { TextField } from "@mui/material";

const inputField = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
  helperText,
}) => {
  return (
    <div className="mb-4">
      <p className={`font-semibold ${error ? "text-red-600" : "text-gray-800"}`}>
        {label}
      </p>
      <TextField
        fullWidth
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={Boolean(error)}
        helperText={helperText}
        variant="outlined"
        FormHelperTextProps={{ style: { marginLeft: "1px" } }}
      />
    </div>
  );
};

export default inputField;
