import React from "react";
import PropTypes from "prop-types";
import "./NewsList.scss";

const NewsList = ({ articleList }) => {
  return (
    <div className="article">
      {articleList.map((articleItem) => {
        return (
          <div className="article_item" key={articleItem.id}>
            <div className="article_img">
              <img src={articleItem.imgSrc} alt="" />
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

NewsList.propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  })).isRequired
}


export default NewsList;
