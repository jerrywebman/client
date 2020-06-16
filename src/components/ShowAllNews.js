import React, { useState, useEffect } from "react";
import { Card, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import firebase from "./services/firebase";

export default function ShowAllNews() {
  const [blogs, setBlogs] = useState([]);

  //view all news
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("news").get();
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onRedirect = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      {blogs.map((item) => (
        <Row key={item.id}>
          <Card>
            <Row>
              <Col>
                <img
                  width="100%"
                  style={{ borderRadius: "5%" }}
                  src={item.image}
                  alt="Coinnewsafrica"
                />
              </Col>
              <Col>
                <CardTitle>
                  <Link
                    to={`/news/${item.slug}`}
                    style={{ color: "#000" }}
                    onClick={onRedirect}
                  >
                    {item.title}
                  </Link>
                </CardTitle>
              </Col>
            </Row>
            {/* <CardFooter className="show-card-footer">
              <small className="text-muted">Author : {item.author} | </small>
              <small className="text-muted card-time">{item.created}</small>
            </CardFooter> */}
          </Card>
        </Row>
      ))}
    </div>
  );
}
