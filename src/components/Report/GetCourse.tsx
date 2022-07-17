import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./GetCourse.css";


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
};

export default function GetCourse() {
    return (
        <div className="getbar">
            <div className="bartext">
                <button
                    className="BtnGet"
                >
                    <Link to="/CoursePage" style={linkStyle}>Get Free Courses</Link>
                </button>
                <h1>Webinar Series</h1>
                <p>Please share your details if you want to be part of our Webinar series, where we help you build your business through active learning.</p>
            </div>
            <div className="recom">

        </div>
        </div>
        
    );
}
