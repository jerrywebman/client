import React, { useEffect } from "react";
import { Col } from "reactstrap";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h3 className="intro">Welcome, get to know more about us here</h3>
      <Col>
        <h4 className="related-news">About Coinnewsafrica</h4>
        <hr></hr>
      </Col>
      <h5 className="content">
        About Coinnewsafrica Founded in 2017, coinnewsfarica is the leading
        digital media resources covering a wide range of news on blockchain
        technology and a leading pioneer of blockchain growth in Africa region,
        Crypto assets, and emerging fintech trends. On a daily basic our team
        deliver the most accurate and up-to-date news. Our content is based on
        our passion to deliver up-to-date and unbiased news, analytics as well
        as regular reports on the social transformation that comes along with
        digital currencies. We believe in the growth of decentralized world to
        becoming to our day to day lives, We work round the clock to help
        educate our readers and community to raised awareness of the advantages
        offered in todays digital revolution, with an increasing number of
        businesses, entrepreneurs adopting blockchain technology, we aim to
        inform, educate, and share valuable information with our readers and
        growing community. <br></br>
      </h5>
      <h4 className="related-news" id="blockchain">
        Stay in Touch for Advertising and Partnerships
      </h4>
      <h5>
        <b>info@coinnewsafrica.com</b>
      </h5>
    </div>
  );
}
