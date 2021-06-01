import React from 'react';

const url = "https://www.lexus.com/content/dam/lexus/images/homepage/hero/2021/Lexus-IS-Homepage-Hero-Desktop-1920x795-LEX-ISG-MY21-0067_M75.jpg";

const Slider = (props) => {
  return (
    <div
      style={{backgroundImage: `url(https://www.lexus.com/content/dam/lexus/images/homepage/hero/2021/Lexus-IS-Homepage-Hero-Desktop-1920x795-LEX-ISG-MY21-0067_M75.jpg)`}}
      className={"sliderBGContainer"}
    >
      <div className={"content"}>
        {props.children}
      </div>
    </div>
  );
};

export default Slider;
