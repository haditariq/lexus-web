import React, { useState } from "react";
import ButtonGroupTabs from "./ButtonGroupTabs";
import InputField from "./InputField";
import { FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import DealerCard from "./DealerCard";

const buttonGroups = [
  {
    title: "ZIP",
  },
  {
    title: "DEALER NAME",
  },
  {
    title: "STATE",
  },
];

const dealers = [
  {
    dealerName: "Kendall Lexus of Alaska",
    dealerNewInventoryUrl:
      "https://www.kendalllexusofalaska.com/new-inventory/index.htm?",
    address1: "6930 Old Seward Highway",
    city: "Anchorage",
    state: "AK",
    zipCode: "99518",
    zipCodeFive: "99518",
    dealerFax: "(907) 257-3814",
    dealerEmail: "alaskalexusinfo@kendallauto.com",
    dealerServiceUrl: "https://www.kendalllexusofalaska.com/ServiceApptForm",
    dealerSiteUrl: "https://www.kendalllexusofalaska.com",
    dealerContactWebUrl: "https://www.kendalllexusofalaska.com/contact.htm",
    eliteStatus: true,
    dealerAddress: {
      address1: "3410 Washington Road",
      city: "Martinez",
      state: "GA",
      zipCode: "30907",
      zipCodeFive: "30907",
    },
  },
  {
    dealerName: "Kendall Lexus of Alaska",
    dealerNewInventoryUrl:
      "https://www.kendalllexusofalaska.com/new-inventory/index.htm?",
    address1: "6930 Old Seward Highway",
    city: "Anchorage",
    state: "AK",
    zipCode: "99518",
    zipCodeFive: "99518",
    dealerFax: "(907) 257-3814",
    dealerEmail: "alaskalexusinfo@kendallauto.com",
    dealerServiceUrl: "https://www.kendalllexusofalaska.com/ServiceApptForm",
    dealerSiteUrl: "https://www.kendalllexusofalaska.com",
    dealerContactWebUrl: "https://www.kendalllexusofalaska.com/contact.htm",
    eliteStatus: true,
    dealerAddress: {
      address1: "3410 Washington Road",
      city: "Martinez",
      state: "GA",
      zipCode: "30907",
      zipCodeFive: "30907",
    },
  },
];

const FindDealerSearchSection = () => {
  const [activeButton, setActiveButton] = useState("STATE");

  return (
    <div className={"searchDealerContainer"}>
      <div className={"headingContainer"}>Find A Dealer</div>

      <ButtonGroupTabs
        buttons={buttonGroups}
        onClick={(e) => setActiveButton(e)}
      />
      <form action='' className={"formContainer"}>
        {activeButton === "ZIP" && (
          <InputField
            placeholder={"Enter ZIP"}
            name={"zip"}
            type={"text"}
            icon={() => <FiMapPin className={"finMapsPin"} />}
          />
        )}
        {activeButton === "DEALER NAME" && (
          <InputField
            placeholder={"Enter Dealer Name"}
            name={"dealerName"}
            type={"text"}
            icon={() => <FiMapPin className={"finMapsPin"} />}
          />
        )}
        {activeButton === "STATE" && (
          <div name={"state"} className={"stateContainer"}>
            <FiMapPin className={"finMapsPin"} />
            <div className={"nameContainer"}>
              <p>Select State</p>
            </div>
            <button className={"dropDownButton"} onClick={() => alert("||")}>
              <RiArrowDropDownLine className={"arrowIcon"} />
            </button>
          </div>
        )}
      </form>
      <div className={"breakLine"} />
      <div className={"resultsContainer"}>
        {dealers.map((item, idx) => (
          <DealerCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default FindDealerSearchSection;
