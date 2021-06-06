import React from 'react';

const InputField = (props) => {
  return (
    <div className={"inputFieldContainer"}>
      {props.icon()}
      <input
        type={props.type}
        name={props.name}
        className={"inputItem"}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
