import React, { useState } from "react";
import firebase from "./services/firebase";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [created, setCreated] = useState("");
  const [tag, setTag] = useState("");
  const [tagTwo, setTagTwo] = useState("");
  const [tagThree, setTagThree] = useState("");

  //CREATE NEW NEWS
  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("news").add({
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
    });
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormGroup className="add-form">
      <h3>Coinnewsafrica News Form</h3>
      <hr></hr>
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

        <Label>Slug</Label>
        <Input
          type="text"
          placeholder="Enter a slug (titil-title)"
          name="slug"
          className="mb-3"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <Label>Image</Label>
        <Input
          type="text"
          placeholder="Please enter an image url"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Label>Author</Label>
        <Input
          type="text"
          placeholder="Add Author fullname"
          name="author"
          className="mb-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Label>Category</Label>
        <Input
          type="text"
          placeholder="Please enter Category news, analysis, etc"
          name="category"
          className="mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Label>Details</Label>

        <CKEditor
          editor={ClassicEditor}
          data="Enter details here"
          onChange={(event, editor) => {
            const data = editor.getData();
            setDetail(data);
          }}
        />
        <Label>Tags (btc eth sgc)</Label>
        <Input
          type="text"
          placeholder="tags"
          name="tag"
          className="mb-3"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <Label>Second Tag</Label>
        <Input
          type="text"
          placeholder="tag related to the post"
          name="tagTwo"
          className="mb-3"
          value={tagTwo}
          onChange={(e) => setTagTwo(e.target.value)}
        />
        <Label>Third Tag</Label>
        <Input
          type="text"
          placeholder="tag related to the post"
          name="tagThree"
          className="mb-3"
          value={tagThree}
          onChange={(e) => setTagThree(e.target.value)}
        />

        <Label>Date</Label>
        <Input
          type="date"
          placeholder="Enter a date [ eg. Sep 27, 2019]"
          name="created"
          className="mb-3"
          value={created}
          onChange={(e) => setCreated(e.target.value)}
        />

        <Button
          style={{ marginTop: "2rem" }}
          block
          type="submit"
          className="mb-3"
          onClick={onCreate}
        >
          submit
        </Button>
      </Form>
    </FormGroup>
  );
};

export default NewsForm;
