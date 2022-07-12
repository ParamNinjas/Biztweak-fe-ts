import React, { useEffect } from "react";
import "./Subscribe.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h6>Newsletter</h6>
        <h2>Let's Get in touch!</h2>
        <p>Enter your email and become part of our entrepreneurial community. We want to engage with you about your business and opportunities.</p>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
