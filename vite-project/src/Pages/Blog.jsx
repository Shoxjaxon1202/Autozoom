import React from "react";
import "../styles/blog.scss";
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 3 Destinations to Visit in Dubai in a Rental Car",
      description:
        "One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.",
      date: "25 Sep 2022",
      image: blog1,
    },
    {
      title: "Top 5 wonderful spots for a car photo session in Dubai",
      description:
        "There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures...",
      date: "11 Feb 2022",
      image: blog2,
    },
    {
      title: "Top 5 Reasons to Rent a Car Dubai Style this Summer",
      description:
        "Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.",
      date: "31 Jul 2022",
      image: blog3 
    },
  ];

  return (
    <div className="blog">
      <h1 className="blog__title">Blog</h1>
      <div className="blog__posts">
        {blogPosts.map((post, index) => (
          <div className="blog__post" key={index}>
            <img src={post.image} alt={post.title} className="blog__image" />
            <div className="blog__content">
              <h2 className="blog__post-title">{post.title}</h2>
              <p className="blog__description">{post.description}</p>
              <p className="blog__date">{post.date}</p>
              <button className="blog__read-more">
                <span className="blog__icon">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
