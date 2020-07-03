import firebase from "./services/firebase";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { Component } from "react";

export default class NewsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      title: "",
      slug: "",
      image: "",
      author: "",
      category: "",
      detail: "",
      tag: "",
      tagTwo: "",
      tagThree: "",
      created: "",
    };
  }

  componentDidMount() {
    const db = firebase
      .firestore()
      .collection("news")
      .doc(this.props.match.params.id);
    db.get().then((doc) => {
      if (doc.exists) {
        const blog = doc.data();
        this.setState({
          key: doc.id,
          title: blog.title,
          slug: blog.slug,
          image: blog.image,
          author: blog.author,
          category: blog.category,
          detail: blog.detail,
          tag: blog.tag,
          tagTwo: blog.tagTwo,
          tagThree: blog.tagThree,
          created: blog.created,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ blog: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      title,
      slug,
      image,
      author,
      category,
      detail,
      tag,
      tagTwo,
      tagThree,
      created,
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("news")
      .doc(this.state.key);
    updateRef
      .set({
        title,
        slug,
        image,
        author,
        category,
        detail,
        tag,
        tagTwo,
        tagThree,
        created,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          title: "",
          slug: "",
          image: "",
          author: "",
          category: "",
          detail: "",
          tag: "",
          tagTwo: "",
          tagThree: "",
          created: "",
        });
        this.props.history.push("/edit/" + this.props.match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <div>
        <FormGroup className="add-form">
          <h3>Coinnewsafrica News Edit Form</h3>
          <hr></hr>
          <Form onSubmit={this.onSubmit}>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Enter a Title"
              name="title"
              className="mb-3"
              value={this.state.title}
              onChange={this.onChange}
            />
            <Label>Slug</Label>
            <Input
              type="text"
              placeholder="Enter a slug (title-title)"
              name="slug"
              className="mb-3"
              value={this.state.slug}
              onChange={this.onChange}
            />

            <Label>Image</Label>
            <Input
              type="Please enter an image url"
              placeholder="Image"
              name="image"
              value={this.state.image}
              onChange={this.onChange}
            />

            <Label>Author</Label>
            <Input
              type="text"
              placeholder="Add Author fullname"
              name="author"
              className="mb-3"
              value={this.state.author}
              onChange={this.onChange}
            />

            <Label>Category</Label>
            <Input
              type="text"
              placeholder="Please enter Category news, analysis, etc"
              name="category"
              className="mb-3"
              value={this.state.category}
              onChange={this.onChange}
            />

            <Label>Details</Label>

            <CKEditor
              editor={ClassicEditor}
              data={`${this.state.detail}`}
              onChange={(event, editor) => {
                const data = editor.getData();

                this.setState({ detail: data });
              }}
            />
            <Label>Tag</Label>
            <Input
              type="text"
              placeholder="tag related to the post"
              name="tag"
              className="mb-3"
              value={this.state.tag}
              onChange={this.onChange}
            />
            <Label>Second Tag</Label>
            <Input
              type="text"
              placeholder="tag related to the post"
              name="date"
              className="mb-3"
              value={this.state.tagTwo}
              onChange={this.onChange}
            />
            <Label>Third Tag</Label>
            <Input
              type="text"
              placeholder="tag related to the post"
              name="tagThree"
              className="mb-3"
              value={this.state.tagThree}
              onChange={this.onChange}
            />
            <Label>Date</Label>
            <Input
              type="text"
              placeholder="Enter a date [ eg. Sep 27, 2019]"
              name="date"
              className="mb-3"
              value={this.state.created}
              onChange={this.onChange}
            />

            <Button
              style={{ marginTop: "2rem" }}
              block
              type="submit"
              className="mb-3"
            >
              submit
            </Button>
          </Form>
        </FormGroup>
      </div>
    );
  }
}

// export default function NewsEdit({ blog }) {
//   const [title, setTitle] = useState(blog.title);
//   const [image, setImage] = useState(blog.image);
//   const [author, setAuthor] = useState(blog.author);
//   const [category, setCategory] = useState(blog.category);
//   const [detail, setDetail] = useState(blog.detail);
//   const [tag, setTag] = useState(blog.tag);

//   //edit function
//   const onUpdate = () => {
//     const db = firebase.firestore();
//     db.collection("news")
//       .doc("JGQ78jKSLRllzz9T8L89")
//       .set({ ...blog, title, image, author, category, detail, tag });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <FormGroup className="add-form">
//       <h3>Coinnewsafrica News Form</h3>
//       <hr></hr>
//       <Form onSubmit={handleSubmit}>
//         <Label>Title</Label>
//         <Input
//           type="text"
//           placeholder="Enter a Title"
//           name="title"
//           className="mb-3"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <Label>Image</Label>
//         <Input
//           type="Please enter an image url"
//           placeholder="Image"
//           name="image"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />

//         <Label>Author</Label>
//         <Input
//           type="text"
//           placeholder="Add Author fullname"
//           name="author"
//           className="mb-3"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />

//         <Label>Category</Label>
//         <Input
//           type="text"
//           placeholder="Please enter Category news, analysis, etc"
//           name="category"
//           className="mb-3"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />

//         <Label>Details</Label>

//         <CKEditor
//           editor={ClassicEditor}
//           data="Enter details here"
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             setDetail(data);
//           }}
//         />
//         <Label>Tags</Label>
//         <Input
//           type="text"
//           placeholder="tags"
//           name="date"
//           className="mb-3"
//           value={tag}
//           onChange={(e) => setTag(e.target.value)}
//         />

//         <Button
//           style={{ marginTop: "2rem" }}
//           block
//           type="submit"
//           className="mb-3"
//           onClick={onUpdate}
//         >
//           submit
//         </Button>
//       </Form>
//     </FormGroup>
//   );
// }
