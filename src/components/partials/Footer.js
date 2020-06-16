import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";
import { HashLink as Hash } from "react-router-hash-link";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row xs="1" sm="1" md="4" lg="4">
          <Col>
            <h3 className="footer-header">Coinnewsafrica</h3>
            <hr className="footer-hr"></hr>
            <Row>
              <Hash to="tandc#policy">
                <h6 className="footer-header-item"> Privacy Policy</h6>
              </Hash>
            </Row>
            <Row>
              <Hash to="tandc#services">
                <h6 className="footer-header-item">Terms of Service</h6>
              </Hash>
            </Row>
          </Col>

          <Col>
            <h3 className="footer-header">Product & Services</h3>

            <hr className="footer-hr"></hr>

            <Row>
              <Link to="/soon">
                <h6 className="footer-header-item">Coming Soon</h6>
              </Link>
            </Row>
          </Col>
          <Col>
            <h3 className="footer-header">Follow</h3>
            <hr className="footer-hr"></hr>

            <Row>
              <Link to="/">
                {" "}
                <h6 className="footer-header-item">News</h6>
              </Link>
            </Row>
            <Row>
              <a
                href="https://t.me/coinnewsafrica_com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="footer-header-item">Telegram</h6>
              </a>
            </Row>
            <Row>
              <a
                href="https://www.youtube.com/channel/UCtKY5nHveznyjtwEF7Nlfxg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="footer-header-item">Youtube</h6>
              </a>
            </Row>
            <Row>
              <a
                href="https://www.instagram.com/coinnewsafrica_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="footer-header-item">Instagram</h6>
              </a>
            </Row>
            <Row>
              <a
                href="https://twitter.com/coinnewsafrica?s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="footer-header-item">Twitter</h6>
              </a>
            </Row>
            <Row>
              <Link to="/soon">
                <h6 className="footer-header-item">Facebook</h6>
              </Link>
            </Row>
          </Col>
          <Col>
            <h3 className="footer-header">Company</h3>
            <hr className="footer-hr"></hr>

            <Row>
              <Link to="/about">
                <h6 className="footer-header-item">About</h6>
              </Link>
            </Row>
            <Row>
              <Link to="/advertise">
                <h6 className="footer-header-item">Advertise</h6>
              </Link>
            </Row>
            <Row>
              <Link to="/soon">
                <h6 className="footer-header-item">Events</h6>
              </Link>
            </Row>

            <Row>
              <Link to="/soon">
                <h6 className="footer-header-item">Careers</h6>
              </Link>
            </Row>
            <Row>
              <Hash to="advertise#form">
                <h6 className="footer-header-item">Contact</h6>
              </Hash>
            </Row>
            <Row>
              <Link to="/soon">
                {" "}
                <h6 className="footer-header-item">Partners</h6>
              </Link>
            </Row>
            <Row>
              <Hash to="advertise#wallet">
                <h6 className="footer-header-item">Support us</h6>
              </Hash>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="footer-card">
              <h6 className="footer-signature">
                2017 - 2020 Coinnewsafrica.com All Right Reserved
              </h6>
            </Card>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
