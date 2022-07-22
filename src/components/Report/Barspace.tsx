import React, { useEffect } from "react";
import "./Barspace.css";
import AOS from 'aos';
import "aos/dist/aos.css";



const Barspace = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  

  
  return (
    <section id="barspace">
      <div className="container-barspace" data-aos="fade-up">
      <h6>Newsletter</h6>
        <h2>Let's Get in touch!</h2>
        <p> All the modules listed above a line with what is missing in your business we have identified top priority and then recommend the order in which you should read and apply the modules can order for your report outcomes to be addressed.</p>
          <div className="course-button">
            <button >Get Free Course</button>
          </div>
      </div>
    </section>
  );
};

export default Barspace;


// import React, { useEffect } from "react";
// import "./Subscribe.css";
// import AOS from 'aos';
// import "aos/dist/aos.css";

// const Subscribe = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);
//   return ( 
//     <section id="subscribe">
//       <div className="container subscribe" data-aos="fade-up">
//       <h6>Newsletter</h6>
//         <h2>Let's Get in touch!</h2>
//         <p>Enter your email and become part of our entrepreneurial community. We want to engage with you about your business and opportunities.</p>
//         <form>
//           <div className="form-control">
//             <input type="text" placeholder="Enter Your Email..." />
//             <button>Subscribe</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Subscribe;