import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
const blogPosts = [
	{
	title: "What is Crowdfunding? Learn everything here.",
	body: `Do you have a great business idea but no financial backing? Crowdfunding
	 could be the answer for you. A few years ago, South Africans came together to
	  help raise money for a petrol attendant who assisted a lady who couldn’t find
	   her bank card by giving her money to top off her tank. The story […]`,
	author: "Busisiwe Mboyisa",
	imgUrl:
	"https://biztweak.org.za/Blog/wp-content/uploads/2022/04/sincerely-media-gG86PdIzUA-unsplash-1200x900.jpg",
	},
	{
	title: "How To Bootstrap Your Business ",
	body: `A great entrepreneur is resourceful and money smart.
	 These traits are important to successfully learn how to bootstrap your business.
	  Bootstrapping is starting a company with only personal savings, including borrowed
	   or invested funds from family or friends, as well as income from initial sales
	   . Bootstrapping a business gives you the chance to stay in control.`,
	author: "Sibongiseni Sibewu",
	imgUrl:
		"https://biztweak.org.za/Blog/wp-content/uploads/2022/04/How-To-Bootstrap-Your-Business.png",
	},
	{
	title: "5 tips to attract and engage customers on social media",
	body: `Here are five tips on how you can attract and engage customers on social media.
	 Social media gives your company the opportunity to connect and engage on a persona
	  level with both current and potential customers. This avenue is a direct driver for
	   business, as 74% of customers rely on social media to guide their purchasing
	    decisions. `,
	author: "Sibongiseni Sibewu",
	imgUrl:
		"https://biztweak.org.za/Blog/wp-content/uploads/2022/03/merakist-CNbRsQj8mHQ-unsplash-1200x900.jpg",
	},
	{
	title: "3 common mistakes entrepreneurs make when finding customers",
	body: `There are 3 common mistakes entrepreneurs make when finding customers.
	 Approximately 75% of small businesses fail within the first 2 years of existence.
	  The primary reason for most business failures is the inability to attract and
	   retain customers. This may be due to the fact that they are new in business, 
	   don’t have a network `,
	author: "Busisiwe Mboyisa",
	imgUrl:
		"https://biztweak.org.za/Blog/wp-content/uploads/2022/03/How-to-reach-your-customers-different-steps-05-scaled-e1648039894434-1200x549.jpg",
	},
	{
		title: "Everyone on Your Team should be Digitally-Savvy, Heres Why?",
		body: `For businesses to grow and quickly adjust to change, everyone on your
		 team should be digitally-savvy. In order for entrepreneurs to remain on the ball
		  in this ever-changing fast-paced world, they need to establish relevant digital
		   skills. Recent statistics have shown that more than four billion people across
		    the world use the internet. In 2020, `,
		author: "Sibongiseni Sibewu",
		imgUrl:
			"https://biztweak.org.za/Blog/wp-content/uploads/2022/03/ben-kolde-bs2Ba7t69mM-unsplash-1200x1531.jpg",
		},
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
