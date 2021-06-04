import React from 'react';
import {MdCancel} from "react-icons/md";

const OverlayMenuItem = (props) => {
  return (
    <div className={"overlayContainer"}>
      <div
        className={"crossContainer"}
        onClick={props.onClose}
      >
        <MdCancel/>
      </div>
  
      {props.menuItemSelected.length > 0 &&
      <h1>{props.menuItemSelected}</h1>
      }
    </div>
  );
};

export default OverlayMenuItem;
