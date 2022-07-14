import React, { useEffect } from "react";
import "./infobar.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
      <div className="infobar" data-aos="fade-up">
        <p>The following are the topics and learning content you need to read and implement in order to improve the processes, systems in your businesses as well as business performance.
        </p>
          </div>
  );
};

export default Subscribe;
