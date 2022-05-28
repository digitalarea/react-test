import React from "react";
import NewsListStyles from "./NewsList.module.scss";

const NewsItem = (articleItem) => {
  return (
    <div className={NewsListStyles.article_item}>
      <div className={NewsListStyles.article_img}>
        <img src={articleItem.imgSrc} alt={articleItem.title} />
      </div>
      <span className={NewsListStyles.article_date}>{articleItem.date}</span>
      <div className={NewsListStyles.article_title}>{articleItem.title}</div>
      <div className={NewsListStyles.article_subtitle}>
        {articleItem.subtitle}
      </div>
      <span className={NewsListStyles.article_link}>
        <a href="">{articleItem.link}</a>
      </span>
    </div>
  );
};

export default NewsItem;
