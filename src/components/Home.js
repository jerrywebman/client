import React, { useState } from "react";
import NewsList from "./NewsList";
import { StateContext } from "./services/StateContext";
// import TopNews from "./TopNews";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <>
        <StateContext.Provider value={{ blogs, setBlogs }}>
          {/* <TopNews /> */}
          <NewsList />
        </StateContext.Provider>
      </>
    </div>
  );
}
