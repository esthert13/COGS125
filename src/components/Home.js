import React from 'react';
import {motion} from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <motion.div
          className="intro-box"
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <h2>Welcome!</h2>
          <p>
            Please head over to "Projects" if you would like to see what I have worked on.
          </p>
        </motion.div>
        
        <motion.div
          className="about-box"
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.2, delay: 0.2}}
        >
          <h3>About Me</h3>
          <p>
            I am Esther Tae, a student of COGS125. This is my portfolio assignment for the class.
          </p>
        </motion.div>
        
        <motion.div
          className="contact-box"
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.4, delay: 0.4}}
        >
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:etae@ucsd.edu">etae@ucsd.edu</a></p>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;