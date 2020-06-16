import React, { useContext } from "react";
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

// import { fetchMore } from "./userExperience/customFunctions";
// import { BackToTop } from "./userExperience/BackToTop";

function News() {
  const { blogs, setBlogs } = useContext(StateContext);
  // const [loadMore, setLoadMore] = useState(loading);

  const handleLoadMore = async () => {
    console.log("button clicked");
    // STILL WORKING HERE
    var lastVisible = blogs[blogs.length - 1];
    console.log("last", lastVisible);
    // console.log("lengths", blogs.length);
    const db = firebase.firestore();
    const next = await db
      .collection("news")
      .orderBy("title")
      .startAfter(lastVisible)
      .limit(2)
      .get()
      .then(function (querySnapshot) {
        setBlogs(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            loading: true,
          }))
        );
      });
  };

  //checking the window size
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // const handleResize = () => {
  //   setWindowHeight(window.innerHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {};
  // }, []);

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
                <hr></hr>
                <CardText>
                  <small style={{ bottom: "5px" }} className="text-muted">
                    Author : {item.author} |{" "}
                  </small>
                  <small className="text-muted card-time">{item.created}</small>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Button onClick={() => handleLoadMore()}>Load More</Button>
        <AdvertTop />
      </Row>
      {/* <BackToTop /> */}
    </>
  );
}

export default News;
