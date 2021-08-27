import React from "react";
const Inputs = (props: { inputText: string; }) => {
  return (
      <>
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2">{props.inputText}</span>
     </>
  );
};
export default Inputs;
