import React from 'react';


const SidebarItem = (props) => {
  return (
    <div className={"sidebarItem"}>
      <div>{props.icon}</div>
      <h6>{props.title}</h6>
    </div>
  );
};

export default SidebarItem;
