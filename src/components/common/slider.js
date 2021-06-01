import React from 'react';


const Slider = (props) => {
  return (
    <div
      style={{backgroundImage: `url("${props.uri}"`}}
      className={"sliderBGContainer"}
    >
      <div className={"content"}>
        {props.children}
      </div>
    </div>
  );
};

export default Slider;
