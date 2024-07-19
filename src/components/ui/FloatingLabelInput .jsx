import React, { useState, useEffect } from "react";

const FloatingLabelInput = ({ label, type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <div className="mb-3 form-input floating-label">
      <label className={isFocused ? "float" : ""}>{label}</label>
      <input
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className=""
      />
    </div>
  );
};

export default FloatingLabelInput;
