import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/pc.png",
      title: "Real Estate",
      desc: "Built a MERN Stack Application where users can access homepage after login and create a new property by providing relevant details and post it so that other users can buy the property.",
      tech: "HTML, CSS, Material-UI, React, NodeJS, MongoDB, Express",
      img: "assets/mern.jpg",
      github: "https://github.com/rvkrishna268/RealEstate",
    },
    {
      id: "2",
      icon: "./assets/pc.png",
      title: "Instaclone",
      desc: "Built instaclone with a landing page which redirects to homepage where the posts are being displayed, user can upload an image create a new post onto the homepage of the website.",
      tech: "HTML, CSS, React, NodeJS, MongoDB, Express",
      img: "assets/insta_mern.png",
      github: "https://github.com/rvkrishna268/InstaClone",
    },
    {
      id: "3",
      icon: "./assets/pc.png",
      title: "Portfolio Website",
      desc: "Built my portfolio which seems to be pretty cool, the website contains my intro, all projects done by me and if anyone likes my work, can contact me through my socials!!.",
      tech: "HTML, SCSS,React JS",
      img: "assets/rsass.png",
      github: "https://github.com/rvkrishna268/Portfolio",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <p className="tech">{d.tech}</p>
                  <span><a href={d.github}>{d.github}</a></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/right-arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right-arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
      <div className="wrapper">
      <a href="#contact">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
