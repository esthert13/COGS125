import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <div className="intro-box">
          <h2>Welcome!</h2>
          <p>
            Please head over to "Projects" if you would like to see what I have worked on.
          </p>
        </div>
        <div className="about-box">
          <h3>About Me</h3>
          <p>
            I am Esther Tae, a student of COGS125. This is my portfolio assignment for the class.
          </p>
        </div>
        <div className="contact-box">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:etae@ucsd.edu">etae@ucsd.edu</a></p>
        </div>
      </div>
    </section>
  );
}

export default Home;