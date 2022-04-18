import React from "react";
import profilePicture from "../../../static/assets/images/bio/bio_image.jpg";
export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className='right-column'>
        <p>
          I began my coding journey learning Python in High School, building out
          the most basic "Hello World" types of applications. Nothing too fancy,
          but it wasn't until I began attending Bottega University's DevCamp for
          their Full Stack Development course that I really began to grow!
        </p>

        <p>
          At DevCamp, I learned a number of different frameworks to expand on
          the foundation I had built in high school. For Python, I learned
          frameworks such as MongoDB, Flask and SQLAlchemy for database
          construction. I started my journey as a javascript developer as well,
          learning how to use tools such as NPM, and develop front ends with
          React, which is the framework of choice for this portfolio!
        </p>

        <p>
          As I'm sure is the case for all developers, there is still so much for
          me to learn in the exciting world of coding! My only true goal is not
          to understand everything, but to get as close as I possibly can!
        </p>

        <h3>~ Bryson Fulton</h3>
      </div>
    </div>
  );
}
