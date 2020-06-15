import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";
import { StateContext } from "./services/StateContext";
import firebase from "./services/firebase";
import TopNews from "./TopNews";

export default function Home() {
  //KEEP FOR LATER
  const [blogs, setBlogs] = useState([]);

  //view all news
  useEffect(() => {
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
        });
    };
    fetchData();

    

    //still working on this
    // const moreData = async () => {
    //   var lastVisible = blogs[blogs.length - 1];
    //   console.log("last", lastVisible);
    //   // console.log("lengths", blogs.length);

    //   const db = firebase.firestore();
    //   const next = await db
    //     .collection("news")
    //     .startAfter(lastVisible)
    //     .limit(2)
    //     .get()
    //     .then(function (querySnapshot) {
    //       setBlogs(
    //         querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //       );
    //     });
    // };

    // moreData();
    //rerun only when blog.length changes
  }, []);

  // module.exports = moreData();

  //my first funnction
  // const fetchData = async () => {
  //   const db = firebase.firestore();
  //   const data = await db.collection("news").get();
  //   setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // fetchData();

  return (
    <div>
      <>
        <StateContext.Provider value={{ blogs, setBlogs }}>
          <TopNews />
          <NewsList />
        </StateContext.Provider>
      </>
    </div>
  );
}
