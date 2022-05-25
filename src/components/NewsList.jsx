import React from "react";
import "./NewsList.scss";

const NewsList = ({ article }) => {
  return (
    <div className="article">
      {article.map((articleItem) => {
        return (
          <div className="article_item" key={articleItem.id}>
            <div className="article_img">
              <img src={articleItem.img} alt="" />
            </div>
            <span className="article_date">{articleItem.date}</span>
            <div className="article_title">{articleItem.title}</div>
            <div className="article_subtitle">{articleItem.subtitle}</div>
            <span className="article_link">
              <a href="">{articleItem.link}</a>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
