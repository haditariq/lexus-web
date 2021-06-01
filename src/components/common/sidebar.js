import React, {useState} from 'react';

import SidebarItem from "../sidebarItem";
import {FaSearch, FaCarAlt, FaTools, FaPhoneAlt, FaSignLanguage} from "react-icons/fa";

const listItems = [
  {
    iconName: () => <FaSearch className={"fontStyle"}/>,
    title: "Search",
  },
  {
    iconName: () => <FaCarAlt className={"fontStyle"}/>,
    title: "Service",
  },
  {
    iconName: () => <FaTools className={"fontStyle"}/>,
    title: "Tuning",
  },
  {
    iconName: () => <FaPhoneAlt className={"fontStyle"}/>,
    title: "Contact Us",
  },
  // {
  //   iconName: () => <FaSignLanguage className={"fontStyle"} />,
  //   title: "lang",
  // },
];

const Sidebar = () => {
  const [activeLanguage, setActiveLanguage] = useState("US");
  let USLanguageClass = activeLanguage === "US" ? "active" : "";
  let ARLanguageClass = activeLanguage === "AR" ? "active" : "";
  
  return (
    <div className={"sideBarContainer"}>
      {listItems.map((item, idx) => <SidebarItem
        key={idx}
        icon={item.iconName()}
        title={item.title}
      />)}
      <div className={"sidebarLanguageContainer"}>
        <button
          className={USLanguageClass}
          onClick={() => setActiveLanguage("US")}>
          US
        </button>
        <button
          className={ARLanguageClass}
          onClick={() => setActiveLanguage("AR")}>
          AR
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
