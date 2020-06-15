import React from "react";
import { Card, Row, Col } from "reactstrap";

export default function MarketAnalysis() {
  return (
    <div>
      <h3 className="intro">
        Stay Updated With Our Weekly Crypto-currency Market Updates.
      </h3>
      <Col>
        <h4 className="related-news">Post</h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card>
            <iframe
              height="315"
              src="https://www.youtube.com/embed/oYMHKjVeJaw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card>
        </Col>
        <Col>
          <Card>
            <iframe
              height="315"
              src="https://www.youtube.com/embed/oYMHKjVeJaw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card>
        </Col>
      </Row>

      <Col>
        <h4 className="related-news">Market Analysis Videos</h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card>
            <iframe
              height="315"
              src="https://www.youtube.com/embed/oYMHKjVeJaw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card>
        </Col>
        <Col>
          <Card>
            <iframe
              height="315"
              src="https://www.youtube.com/embed/oYMHKjVeJaw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
