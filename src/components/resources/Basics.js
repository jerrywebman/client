import React from "react";
import { Card, Row, Col, CardTitle } from "reactstrap";

export default function Basics() {
  return (
    <div>
      <h3 className="intro">
        New to blockchain?, Know the basics with this four (4) minutes read
        content.
      </h3>
      <Col>
        <h4 className="related-news" id="blockchain">
          Blockchain Technology
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
      </Row>

      <Col>
        <h4 className="related-news" id="crypto">
          Cryptocurrency
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
      </Row>
      <Col>
        <h4 className="related-news" id="btc">
          Bitcoin
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
      </Row>
      <Col>
        <h4 className="related-news" id="eth">
          Ethereum & Ethereum Blockchain
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
      </Row>
      <Col>
        <h4 className="related-news" id="ico">
          Initial Coin Offering (ICO)
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
      </Row>
      <Col>
        <h4 className="related-news" id="ieo">
          Initial Exchange Offering (IEO)
        </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card className="crypto-img">
            <img
              src="/images/bitcoin.jpg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
        <Col>
          <h6 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
      </Row>
    </div>
  );
}
