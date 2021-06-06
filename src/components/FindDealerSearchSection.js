import React, {useState} from 'react';
import ButtonGroupTabs from "./ButtonGroupTabs";
import InputField from "./InputField";
import {FiMapPin} from "react-icons/fi";
import {RiArrowDropDownLine} from "react-icons/ri";

const buttonGroups = [
  {
    title: "ZIP",
  },
  {
    title: "DEALER NAME",
  },
  {
    title: "STATE",
  }
];

const FindDealerSearchSection = () => {
  const [activeButton, setActiveButton] = useState('STATE')
  
  return (
    <div className={"searchDealerContainer"}>
      
      <div className={"headingContainer"}>
        Find A Dealer
      </div>
      
      <ButtonGroupTabs
        buttons={buttonGroups}
        onClick={(e) => setActiveButton(e)}
      />
      <form action="" className={"formContainer"}>
        {activeButton === "ZIP" &&
        <InputField
          placeholder={"Enter ZIP"}
          name={"zip"}
          type={"text"}
          icon={() => <FiMapPin className={"finMapsPin"}/>}
        />
        }
        {activeButton === "DEALER NAME" &&
        <InputField
          placeholder={"Enter Dealer Name"}
          name={"dealerName"}
          type={"text"}
          icon={() => <FiMapPin className={"finMapsPin"}/>}
        />
        }
        {activeButton === "STATE" &&
        <div
          name={"state"}
          className={"stateContainer"}>
          <FiMapPin className={"finMapsPin"}/>
          <div className={"nameContainer"}>
            <p>Select State</p>
          </div>
          <button
            className={"dropDownButton"}
            onClick={() => alert("||")}>
            <RiArrowDropDownLine className={"arrowIcon"}/>
          </button>
        </div>
        }
      </form>
      <div className={"breakLine"}/>
      <div className={"resultsContainer"}>df</div>
    </div>
  );
};

export default FindDealerSearchSection;
