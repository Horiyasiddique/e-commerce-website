import React from "react";
import Image from "next/image";
import AboutImage from "../../(public)/about-img.jpg";

function About() {
  return (
    <div>
        <h1 id="about-heading">About Us</h1>
    <div id="about-container">
      <div id="about-text">
        we believe in creating more than just delicious cakes we craft
        unforgettable experiences. Our cakes are made with the finest, freshest
        ingredients, carefully sourced to ensure top-notch quality. We
        prioritize health and sustainability, using natural sweeteners, organic
        flour, and preservative-free ingredients wherever possible. We take
        great pride in maintaining the highest hygiene standards in every step
        of the cake-making process. From our kitchen to the packaging, we ensure
        that all our cakes are prepared in neat, sanitized vessels to ensure
        maximum freshness and safety. Whether you&apos;re celebrating a birthday, an
        anniversary, or just treating yourself, our cakes are designed to bring
        joy, with a focus on taste, beauty, and quality. Each cake is made with
        love and attention to detail, ensuring a delightful experience for our
        customers
      </div>

      <div>
        <Image src={AboutImage} alt="about image" id="about-img"></Image>
      </div>
    </div>
    </div>
  );
}

export default About;
