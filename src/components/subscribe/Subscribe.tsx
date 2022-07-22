import React, { useRef, useState, useEffect } from "react";
import "./Subscribe.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';


const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  const [to_name, setTo_Name] = useState("");
  
  const submitInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("to_name", to_name);
    
    const emailContent = {
    to_name: to_name
    }
    
    emailjs.send('service_y6f3tfy','template_nhpfwsv', emailContent, 'EF2Wbs3gVnRSHu3tR')
	.then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(err) {
        console.log('FAILED...', err);
     });
};

  
  
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h6>Newsletter</h6>
        <h2>Let's Get in touch!</h2>
        <p>Enter your email and become part of our entrepreneurial community. We want to engage with you about your business and opportunities.</p>
        <form  onSubmit={submitInfo}>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..."
            onChange={(event) => {setTo_Name(event.target.value)}}
            />
            <button >Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;


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