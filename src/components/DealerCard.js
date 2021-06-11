import React from "react";

// dealerName: "Kendall Lexus of Alaska",
// dealerNewInventoryUrl: "https://www.kendalllexusofalaska.com/new-inventory/index.htm?",
// address1: "6930 Old Seward Highway",
// city: "Anchorage",
// state: "AK",
// zipCode: "99518",
// zipCodeFive: "99518",
// dealerFax: "(907) 257-3814",
// dealerEmail: "alaskalexusinfo@kendallauto.com",
// dealerServiceUrl: "https://www.kendalllexusofalaska.com/ServiceApptForm",
// dealerSiteUrl: "https://www.kendalllexusofalaska.com",
// dealerContactWebUrl: "https://www.kendalllexusofalaska.com/contact.htm",
// eliteStatus: true

// dealerAddress: {
//   address1: "3410 Washington Road",
//   city: "Martinez",
//   state: "GA",
//   zipCode: "30907",
//   zipCodeFive: "30907",
// },

const DealerCard = (props) => {

  let {address1, city, state, zipCode, zipCodeFiver} = props.dealerAddress;
  return (
    <div className={"dealerCardContainer"}>
      <h3>{props.deealerName}</h3> 
      <div className={"eliteContainer"}>
        <img
          src='https://www.lexus.com/content/dam/lexus/images/dealers/main/Lexus-Elite-Dealers-Icon.svg'
          alt=''
          className={"eliteIcon"}
        />
        <p>ELITE DEALER</p>
      </div>
      <p>{address1} {city} {state}, {zipCode}</p>
      <p>{props.dealerFax}</p>
      <button className={"underlineButton"}>
        Dealer Details <div />
      </button>
      <br />
      <button className={"underlineButton"}>
        Dealer site <div />
      </button>
      <br />
      <button className={"contactButton"}>CONTACT DEALER</button>
    </div>
  );
};

export default DealerCard;
