import React, { useEffect } from "react";

export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className=" col-10 mx-auto text-center text-title text-uppercase pt-s">
          <h1 className=" display-3"></h1>
          <h1 style={{ marginTop: "20vh" }}> coming</h1>
          <h2 style={{ color: "#ffcc29" }}>soon</h2>
        </div>
      </div>
    </div>
  );
}
