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

const Sidebar = (props) => {
  const [activeLanguage, setActiveLanguage] = useState("US");
  let USLanguageClass = activeLanguage === "US" ? "active" : "";
  let ARLanguageClass = activeLanguage === "AR" ? "active" : "";
  
  return (
    <div className={"sideBarContainer"}>
      {listItems.map((item, idx) => <SidebarItem
        key={idx}
        icon={item.iconName()}
        title={item.title}
        onClick={props.onPress}
      />)}
      <div className={"sidebarLanguageContainer"}>
        <button
          className={USLanguageClass}
          onClick={() => setActiveLanguage("US")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
            alt=""
            className={"flag"}
          />
        </button>
        <button
          className={ARLanguageClass}
          onClick={() => setActiveLanguage("AR")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png"
            alt=""
            className={"flag"}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
