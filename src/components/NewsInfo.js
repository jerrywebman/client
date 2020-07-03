import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, Button, Col, Row } from "reactstrap";
import NewsGene from "./NewsGene";
import firebase from "./services/firebase";
import AdvertTop from "./Adverts/AdvertTop";
import ReactHtmlParser from "react-html-parser";
import ShowAllNews from "./ShowAllNews";

export default class NewsInfo extends Component {
  //view all news
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      key: "",
    };
  }

  //view all news

  componentDidMount() {
    const db = firebase
      .firestore()
      .collection("news")
      .doc(this.props.match.params.id);
    db.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          blog: doc.data(),
          key: doc.id,
          isLoading: false,
        });
        console.log(doc.data);
      } else {
        console.log("No such document!");
        console.log(this.props.match.params.id);
      }
    });
  }

  onDelete(id) {
    firebase
      .firestore()
      .collection("news")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  // const { currentUser } = useContext(AuthContext);

  render() {
    return (
      <div>
        <Row>
          <AdvertTop />
        </Row>
        <Row>
          <Col xs="12" sm="9" md="9" lg="9">
            <Card>
              <CardBody>
                <div>
                  <CardText className="card-news-tag">
                    {this.state.blog.category}
                  </CardText>
                  <Row>
                    <img
                      className="img-avatar"
                      alt="Coinnewsafrica"
                      src="https://images.cointelegraph.com/images/150_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83ZTc4NzY1ZDA0ZjRhZWQ1ZTkzNTM0NmI0MGQ4ZmRhYS5qcGc=.jpg"
                    ></img>
                    <CardText className="author-text">
                      {this.state.blog.author}
                    </CardText>
                  </Row>
                </div>
                <h4 className="news-title">{this.state.blog.title}</h4>
                <CardText className="card-news-time">
                  {this.state.blog.datePretty}
                </CardText>
              </CardBody>
              <img
                width="100%"
                src={this.state.blog.image}
                alt="Coinnewsafrica"
              />
              <CardBody>
                <CardText className="news-details">
                  {ReactHtmlParser(this.state.blog.detail)}
                </CardText>

                <hr className="headersLine"></hr>
                <div>
                  <Button className="btn-edit" outline color="warning">
                    <Link to={`/edit/${this.state.key}`}>Edit</Link>
                  </Button>
                  <Button
                    className="btn-delete"
                    outline
                    color="danger"
                    onClick={this.onDelete.bind(this, this.state.key)}
                  >
                    Delete
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Row>
              <AdvertTop />
            </Row>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3">
            <NewsGene />
            <ShowAllNews />
          </Col>
          <Row>
            <AdvertTop />
          </Row>
        </Row>
      </div>
    );
  }
}

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router";
// import { Card, CardText, CardBody, Button, Col, Row } from "reactstrap";
// import NewsGene from "./NewsGene";
// import firebase from "./services/firebase";
// import AdvertTop from "./Adverts/AdvertTop";
// import ReactHtmlParser from "react-html-parser";
// import ShowAllNews from "./ShowAllNews";

// const NewsInfo = () => {
//   const { blogs } = useContext(StateContext);

//   componentDidMount(){
//     let {id} = useParams();
//     const db = firebase
//       .firestore()
//       .collection("news")
//       .doc(id);
//     db.get().then((doc) => {
//       if (doc.exists) {
//         this.setState({
//           blog: doc.data(),
//           key: doc.id,
//           isLoading: false,
//         });
//       } else {
//         console.log("No such document!");
//       }
//     });
//   }

//   return (
//     <div>
//       <Row>
//         <AdvertTop />
//       </Row>
//       <Row>
//         <Col xs="12" sm="9" md="9" lg="9">
//           <Card>
//             <CardBody>
//               <div>
//                 <CardText className="card-news-tag">
//                   {blog.category}
//                 </CardText>
//                 <img
//                   className="img-avatar"
//                   alt="Coinnewsafrica"
//                   src="https://images.cointelegraph.com/images/150_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83ZTc4NzY1ZDA0ZjRhZWQ1ZTkzNTM0NmI0MGQ4ZmRhYS5qcGc=.jpg"
//                 ></img>
//               </div>
//               <h4 className="news-title">{blog.title}</h4>
//               <CardText className="card-news-time">{blog.created}</CardText>
//             </CardBody>
//             <img
//               width="100%"
//               src="https://s.imgur.com/images/logo-1200-630.jpg?2"
//               alt="Coinnewsafrica"
//             />
//             <CardBody>
//               <CardText className="news-details">
//                 {ReactHtmlParser(blog.detail)}
//               </CardText>

//               <hr className="headersLine"></hr>
//               <div>
//                 <Button className="btn-edit" outline color="warning">
//                   <Link to={`/edit/${blog.id}`}>Edit</Link>
//                 </Button>
//                 <Button
//                   className="btn-delete"
//                   outline
//                   color="danger"
//                   // onClick={onDelete}
//                 >
//                   Delete
//                 </Button>
//               </div>
//             </CardBody>
//           </Card>
//           <Row>
//             <AdvertTop />
//           </Row>
//         </Col>

//         {/* <Col xs="12" sm="3" md="3" lg="3">
//           <NewsGene />
//           {blogs.map((item) => (
//             <Row key={item.id}>
//               <Card>
//                 <Row>
//                   <Col>
//                     <img width="100%" src={item.image} alt="Coinnewsafrica" />
//                   </Col>
//                   <Col>
//                     <CardTitle>
//                       <Link to={`/show/${item.id}`} onClick={refreshPage}>
//                         {item.title}
//                       </Link>
//                     </CardTitle>
//                   </Col>
//                 </Row>
//                 <CardFooter className="show-card-footer">
//                   <small className="text-muted">
//                     Author : {item.author} |{" "}
//                   </small>
//                   <small className="text-muted card-time">{item.created}</small>
//                 </CardFooter>
//               </Card>
//             </Row>
//           ))}
//         </Col> */}
//         <Row>
//           <AdvertTop />
//         </Row>
//       </Row>
//     </div>
//   );
// };

// export default NewsInfo;

// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { StateContext } from "./services/StateContext";
// import firebase from "./services/firebase";

// const NewsInfo = () => {
//   const { blogs } = useContext(StateContext);
//   const [blog, setBlog] = useState([]);
//   let { id } = useParams();

//   useEffect(() => {
//     const db = firebase.firestore().collection("news").doc(id);
//     db.get().then((doc) => {
//       if (doc.exists) {
//         setBlog({ blog: doc.data(), id: doc.id });
//       } else {
//         console.log("No such document!");
//       }
//     });
//   }, []);
//   return <div>{blog.image}</div>;
// };

// export default NewsInfo;
