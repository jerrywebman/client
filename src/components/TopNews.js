import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://s.imgur.com/images/logo-1200-630.jpg?2",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "https://s.imgur.com/images/logo-1200-630.jpg?2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "https://s.imgur.com/images/logo-1200-630.jpg?2",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const TopNews = () => <UncontrolledCarousel items={items} />;

export default TopNews;
