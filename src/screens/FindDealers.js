import React from "react";
import FindDealerSearchSection from "../components/FindDealerSearchSection";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FindDealers = () => {
  return (
    <div className={"findDealersContainer"}>
      <div className={"sectionColumn"}>
        <FindDealerSearchSection />
      </div>
      <div className={"sectionColumn"}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB5ukZgNnlKRZDvfM6LV2y6l9HikfZQCb8" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={1}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default FindDealers;
