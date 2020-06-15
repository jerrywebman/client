import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row xs="1" sm="1" md="4" lg="4">
          <Col>
            <h3 className="footer-header">Coinnewsafrica</h3>
            <hr className="footer-hr"></hr>
            <Row>
              <Link>
                <h6 className="footer-header-item"> Privacy Policy</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Terms of Use</h6>
              </Link>
            </Row>
          </Col>

          <Col>
            <h3 className="footer-header">Product & Services</h3>

            <hr className="footer-hr"></hr>

            <Row>
              <Link>
                <h6 className="footer-header-item">Coming Soon</h6>
              </Link>
            </Row>
          </Col>
          <Col>
            <h3 className="footer-header">Follow</h3>
            <hr className="footer-hr"></hr>

            <Row>
              <Link>
                {" "}
                <h6 className="footer-header-item">News</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Telegram</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Youtube</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Instagram</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Twitter</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Facebook</h6>
              </Link>
            </Row>
          </Col>
          <Col>
            <h3 className="footer-header">Company</h3>
            <hr className="footer-hr"></hr>

            <Row>
              <Link>
                <h6 className="footer-header-item">About</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Advertise</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Events</h6>
              </Link>
            </Row>

            <Row>
              <Link>
                <h6 className="footer-header-item">Careers</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Contact</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                {" "}
                <h6 className="footer-header-item">Partners</h6>
              </Link>
            </Row>
            <Row>
              <Link>
                <h6 className="footer-header-item">Support us</h6>
              </Link>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="footer-card">
              <h6 className="footer-signature">
                Coinnewsafrica.com All Right Reserved
              </h6>
            </Card>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
