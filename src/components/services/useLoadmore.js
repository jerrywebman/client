import React, { useEffect, useContext, useState } from "react";
import { StateContext } from "./StateContext";
import firebase from "./firebase";

export default function useLoadmore() {
  //   const { blogs, setBlogs } = useContext(StateContext);
  const [blogs, setBlogs] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      const db = firebase.firestore();
      let docRef = await db
        .collection("news")
        .orderBy("title")
        .limit(2)
        .get()
        .then(function (querySnapshot) {
          setBlogs(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          console.log(setBlogs)
          setHasMore(querySnapshot.docs.length > 0); //or blogs . length
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        });
    };
    fetchData();

    //adding to the dom

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

  });
  return { loading, error, blogs, hasMore };
}
