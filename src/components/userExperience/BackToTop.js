import React, { useEffect } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export const BackToTop = () => {
  useEffect(() => {
    var mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      }
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <ArrowUpwardIcon onclick={topFunction()} id="back-to-top" />
    </div>
  );
};
