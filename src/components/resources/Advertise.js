import React from "react";
import { Helmet } from "react-helmet";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function Advertise() {
  return (
    <div>
      <Helmet>
        <title>Advertise with CoinNewsAfrica</title>
        <meta
          name="description"
          content="BlockChain News | crypto News | Cryptocurrency News| Bitcoin News"
        />
        <meta
          name="keywords"
          content="BlockChain,crypto,Cryptocurrency, Bitcoin, News, Advertise"
        />
      </Helmet>

      <h3 className="intro">
        Get insights about advertising on CoinNewsAfrica
      </h3>
      <h5 className="intro-relaxed">
        We are the best digital media agency covering blockchain technology
      </h5>

      <Row xs="1" sm="1" md="2" lg="2">
        <Col>
          <Card>
            <Row className="advert-row">
              <img
                className=""
                src="/images/globe.svg"
                alt="coinnewsafrica-bitcoin-image"
                style={{ width: "20%", height: "20%" }}
              />
            </Row>
            <Row>
              <h6 className="content-advert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </h6>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="advert-row">
              <img
                className=""
                src="/images/globe.svg"
                alt="coinnewsafrica-bitcoin-image"
                style={{ width: "20%", height: "20%" }}
              />
            </Row>
            <Row>
              <h6 className="content-advert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </h6>
            </Row>
          </Card>
        </Col>
      </Row>

      <Col>
        <h4 className="related-news">Something here</h4>
        <hr></hr>
      </Col>

      <Row className="advert-row  advert-row-dark">
        <Col>
          <Card>
            <img
              className=""
              src="/images/shot.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
      </Row>

      <Col>
        <h4 className="related-news">Reachout to the world </h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="2" md="3" lg="3">
        <Col>
          <Card>
            <img
              className=""
              src="/images/sponsored.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <img
              className=""
              src="/images/explain.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>{" "}
        </Col>
        <Col>
          <Card>
            <img
              className=""
              src="/images/banner.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>{" "}
        </Col>

        <Col>
          <Card>
            <img
              className=""
              src="/images/photo.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>{" "}
        </Col>
        <Col>
          <Card>
            <img
              className=""
              src="/images/analysis.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>{" "}
        </Col>
        <Col>
          <Card>
            <img
              className=""
              src="/images/press.svg"
              alt="coinnewsafrica-bitcoin-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>{" "}
        </Col>
      </Row>
      <Card style={{ marginTop: "4em" }} id="form">
        <FormGroup className="add-form">
          <h5 className="intro-relaxed">
            We will only contact you with an official email address
            <strong style={{ paddingLeft: "10px" }}>
              ...@coinnewsafrica.com.
            </strong>{" "}
            A member of our team will reachout to you within the next 12 hours
          </h5>
          <h3>Coinnewsafrica Contact Form</h3>
          <hr></hr>
          {/* <Form onSubmit={handleSubmit}> */}
          <Form>
            <Label>Fullname</Label>
            <Input
              type="text"
              placeholder="Enter your fullName"
              name="fullname"
              className="mb-3"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />

            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter an email"
              name="email"
              className="mb-3"
              // value={email}
              // onChange={(e) => setSlug(e.target.value)}
            />

            <Label>Suject</Label>
            <Input
              type="subject"
              placeholder="Please a subject"
              name="subject"
              // value={subject}
              // onChange={(e) => setImage(e.target.value)}
            />

            <Label>Details</Label>
            <Input
              type="textArea"
              placeholder="Add details"
              name="details"
              className="mb-3"
              // value={details}
              // onChange={(e) => setAuthor(e.target.value)}
            />

            <Button
              style={{ marginTop: "2rem" }}
              block
              type="submit"
              outline
              style={{ color: "#ffcc29", fontSize: "2em" }}
              className="btn-class"
              // onClick={onCreate}
            >
              Submit
            </Button>
          </Form>
        </FormGroup>
      </Card>
      <Row xs="1" sm="1" md="2" lg="2" id="wallet">
        <Col>
          <Card style={{ padding: "1em" }}>
            <h4 className="wallet-card">Our Official Bitcoin Address</h4>
            <hr></hr>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "1em" }}>
            <h4 className="wallet-card"> Our Official Ethereum Address</h4>
            <hr></hr>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
            <h5 className="wallet-card-text">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
