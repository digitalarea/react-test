import React from "react";
import PropTypes from "prop-types";
import NewsListStyles from "./NewsList.module.scss";
import NewsItem from "./NewsItem";

const NewsList = ({ articleList }) => {
  return (
    <div className={NewsListStyles.article}>
      {articleList.map((articleItem) => {
        return (
          <NewsItem
            key={articleItem.id}
            imgSrc={articleItem.imgSrc}
            date={articleItem.date}
            title={articleItem.title}
            subtitle={articleItem.subtitle}
            link={articleItem.link}
          />
        );
      })}
    </div>
  );
};

NewsList.propTypes = {
  articleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsList;
