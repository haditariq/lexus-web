import React from 'react';

const CarTypeItem = (props) => {
  return (
    <div
      onClick={() => props.onTypeClick(props.item)}
      className={"carTypeItemContainer"}
    >
      {props.item.name}
    </div>
  );
};

export default CarTypeItem;
