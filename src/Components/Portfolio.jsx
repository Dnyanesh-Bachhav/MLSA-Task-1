/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Result Generation and Analysis System",
    description:
      "Designed and deployed a Result Generation and Analysis System for GPNashik college, managing data from 10+ branches and 3000+ students with integrated admin, HOD, and teacher panels.",
    url: "https://github.com/Dnyanesh-Bachhav/Result-Generation-and-Analysis-System",
  },
  {
    title: "CoinStack",
    description:
      "Developed Coin-Stack, a cutting-edge cryptocurrency learning and trading app with 12,000+ coins, 10+ features, and 98% accurate machine learning-based crypto indexes on Azure Cloud for seamless cross-platform accessibility.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Marathi Status App",
    description:
      "Developed and launched a Marathi Status App on the Play Store, with image-based content, categorized features, and over 10,000+ downloads from July to December 2021.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Dynamic Shop Application",
    description:
      "Developed a fully customizable web Application for shop management, that can be used for any shop and store available.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
