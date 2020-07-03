import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Form,
  Label,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Input,
} from "reactstrap";
import firebase from "../services/firebase";
import { StateContext } from "../services/StateContext";
import { Link } from "react-router-dom";

export default function MarketAnalysis() {
  const { blogs, setBlogs } = useContext(StateContext);
  const [videoFile, setVideoFile] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const db = firebase.firestore();
  //ADD NEW VIDEO
  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("videos").add({
      title,
      link,
      created: firebase.firestore.Timestamp.fromDate(
        new Date("December 10, 1815")
      ),
    });
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //VIEW ALL VIDEOS
  useEffect(() => {
    const fetchVideo = async () => {
      let docRef = await db
        .collection("videos")
        .orderBy("created")
        .limit(4)
        .get()
        .then(function (querySnapshot) {
          setVideoFile(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
    };

    fetchVideo();
  }, []);

  const onDelete = (id) => {
    db.collection("videos")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      <Button
        outline
        style={{ color: "#ffcc29", marginTop: "1em", float: "right" }}
        className="btn-class"
        onClick={toggle}
      >
        Add Analysis
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Video ID</ModalHeader>
        <ModalBody>
          <FormGroup className="add-form">
            <Form onSubmit={handleSubmit}>
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="Enter a Title"
                name="title"
                className="mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label>
                Link "https://www.youtube.com/watch?v=pVpJwya8GGk" link =
                pVpJwya8GGk{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter a Link ID "
                name="link"
                className="mb-3"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <Button
                style={{ color: "#ffcc29" }}
                type="submit"
                className="mb-3"
                onClick={onCreate}
              >
                Post
              </Button>{" "}
              <Button
                style={{ color: "red" }}
                className="mb-3"
                onClick={toggle}
              >
                Cancel
              </Button>
            </Form>
          </FormGroup>
        </ModalBody>
      </Modal>

      <h3 className="intro">
        Stay Updated With Our Weekly Crypto-currency Market Updates.
      </h3>
      <Col>
        <h4 className="related-news">Market Analysis Videos</h4>
        <hr></hr>
      </Col>
      <Row xs="1" sm="1" md="2" lg="2">
        {videoFile.map((video) => (
          <Col key={video.id}>
            <Card>
              <Button
                outline
                color="danger"
                onClick={() => {
                  onDelete();
                  const id = video.id;
                }}
              >
                X
              </Button>
              <iframe
                title="three"
                height="315"
                src={`https://www.youtube.com/embed/${video.link}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </Col>
        ))}
      </Row>

      <Col>
        <h4 className="related-news">Market Analysis Post</h4>
        <hr></hr>
      </Col>
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
    </div>
  );
}
