import React from 'react';

import SidebarItem from "../sidebarItem";
import {FaSearch, FaCarAlt, FaTools, FaPhoneAlt, FaSignLanguage} from "react-icons/fa";

const listItems = [
  {
    iconName: () => <FaSearch className={"fontStyle"} />,
    title: "Search",
  },
  {
    iconName: () => <FaCarAlt className={"fontStyle"} />,
    title: "Service",
  },
  {
    iconName: () => <FaTools className={"fontStyle"} />,
    title: "Tuning",
  },
  {
    iconName: () => <FaPhoneAlt className={"fontStyle"} />,
    title: "Contact Us",
  },
  {
    iconName: () => <FaSignLanguage className={"fontStyle"} />,
    title: "lang",
  },
];

const Sidebar = () => {
  return (
    <div className={"sideBarContainer"}>
      {listItems.map((item, idx) => <SidebarItem
        key={idx}
        icon={item.iconName()}
        title={item.title}
      />)}
    </div>
  );
};

export default Sidebar;
