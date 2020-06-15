import React from "react";
import { Card, Col } from "reactstrap";

export default function AdvertTop() {
  return (
    <div>
      <Col xs="12" sm="12" lg="12" xl="12">
        <Card className="advert-card">
          <img
            className="advert-card-img"
            width="100%"
            src="/images/CNAAdvert.svg"
            alt="Coinnewsafrica"
          />
        </Card>
      </Col>
    </div>
  );
}
