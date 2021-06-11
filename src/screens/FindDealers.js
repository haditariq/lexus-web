import React from "react";
import FindDealerSearchSection from "../components/FindDealerSearchSection";

const FindDealers = () => {
  return (
    <div className={"findDealersContainer"}>
      <div className={"sectionColumn"}>
        <FindDealerSearchSection/>
      </div>
      <div className={"sectionColumn"}>hello world</div>
    </div>
  );
};

export default FindDealers;
