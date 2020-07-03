import React, {
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import firebase from "./services/firebase";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { StateContext } from "./services/StateContext";
import AdvertTop from "./Adverts/AdvertTop";

function News() {
  const { blogs, setBlogs } = useContext(StateContext);
  // const [moreBlogs, setMoreBlogs] = useState(blogs);

  //view all news
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      let docRef = await db
        .collection("news")
        .orderBy("created")
        .limit(12)
        .get()
        .then(function (querySnapshot) {
          // var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          setBlogs(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          // var next = db
          //   .collection("news")
          //   .orderBy("title")
          //   .startAfter(lastVisible)
          //   .limit(2);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <AdvertTop />
      </Row>

      <Row xs="1" sm="1" md="3" lg="3">
        {blogs.map((item) => (
          <Col key={item.id}>
            <Card
              className="card"
              key={item.title}
              style={{ borderRadius: "5%", height: "400px" }}
            >
              <CardImg
                style={{ borderRadius: "5%", height: "180px" }}
                src={item.image}
                alt="Card image cap"
              />
              <CardText className="card-news-tag">{item.category}</CardText>
              <CardBody>
                <CardTitle className="card-title">
                  <Link to={`/news/${item.id}`} style={{ color: "#000" }}>
                    {item.title}
                  </Link>
                </CardTitle>
                {/* <hr></hr> */}
                <CardText>
                  <small style={{ bottom: "5px" }} className="text-muted">
                    Author: {item.author}{" "}
                  </small>
                  <br></br>
                  <small className="text-muted card-time">
                    Created: {item.datePretty}
                  </small>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {/* <Button onClick={() => handleLoadMore()}>Load More</Button> */}
        <AdvertTop />
      </Row>
      {/* <BackToTop /> */}
    </>
  );
}

export default News;
