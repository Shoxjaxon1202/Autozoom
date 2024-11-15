import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/blog.scss";
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: t("blog.post1.title"),
      description: t("blog.post1.description"),
      date: "25 Sep 2022",
      image: blog1,
    },
    {
      title: t("blog.post2.title"),
      description: t("blog.post2.description"),
      date: "11 Feb 2022",
      image: blog2,
    },
    {
      title: t("blog.post3.title"),
      description: t("blog.post3.description"),
      date: "31 Jul 2022",
      image: blog3,
    },
  ];

  return (
    <div className="blog">
      <div className="blog_wrapper">
        <h1 className="blog__title">{t("blog.title")}</h1>
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
    </div>
  );
};

export default Blog;
