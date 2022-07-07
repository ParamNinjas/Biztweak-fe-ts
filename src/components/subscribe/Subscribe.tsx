// 
import { Component , useEffect} from "react";
import "./Subscribe.css";
import AOS from 'aos';
import "aos/dist/aos.css";


export default class form extends Component {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

const state={
email: '',
sent:false
}

//handler imput
const handleEmail=(e)=>{
this.setState({
  email:e.target.email
})
}

formSubmit=(e)=>{
e.preventDefault();

let data = {
email:this.state.email
}

axios.post('/api/forms', data)
.then(res=>){
this.setState({
  sent:true,
    },this.resetForm())
}).catch(()=>{
console.log('message not sent');
})
}

  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h6>Newsletter</h6>
        <h2>Let's Get in touch!</h2>
        <p>Enter your email and become part of our entrepreneurial community. We want to engage with you about your business and opportunities.</p>
        <form>
          <div className="form-control">
            <input 
            type="text"
            name="email"
            className="email"
            placeholder="Enter Your Email..."
            value={this.state.email}
            onChange={this.handleEmail}
            />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

