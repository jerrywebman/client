import React, { useEffect, useState, useContext } from "react";
import firebase from "../services/firebase";
import { StateContext } from "../services/StateContext";

export const fetchMore = async () => {
  const { blogs } = useContext(StateContext);
  const [moreBlogs, setMoreBlogs] = useState(blogs);
  const db = firebase.firestore();
  var moreData = db.collection("news").limit(6);

  return moreData.get().then(function (documentSnapshots) {
    // Get the last visible document
    var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    // Construct a new query starting at this document,
    // get the next 25 cities.
    var next = db.collection("news").startAfter(lastVisible).limit(6);
    console.log(moreBlogs);

    // setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
};
