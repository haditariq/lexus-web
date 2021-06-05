import React from 'react';
import {MdCancel} from "react-icons/md";
import FindDealers from "../../screens/FindDealers";

const OverlayMenuItem = (props) => {
  return (
    <div className={"overlayContainer"}>
      <div
        className={"crossContainer"}
        onClick={props.onClose}
      >
        <MdCancel/>
      </div>
  
      <FindDealers/>
    </div>
  );
};

export default OverlayMenuItem;
