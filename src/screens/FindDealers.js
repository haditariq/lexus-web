import React from 'react';
import FindDealerSearchSection from "../components/FindDealerSearchSection";
import {Row, Col} from 'reactstrap';

const FindDealers = () => {
  return (
    <div className={"findDealersContainer"}>
      <Row className={"findDealersContainerRow"}>
        <Col md="6" lg="4">
          <FindDealerSearchSection/>
        </Col>
        <Col md="6" lg="8">
          hello world
        </Col>
      </Row>
    </div>
  );
};

export default FindDealers;
