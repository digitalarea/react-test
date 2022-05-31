import React from "react";
import NewsCardStyles from "./NewsCard.module.scss";

const NewsItem = (articleItem) => {
  return (
    <div className={NewsCardStyles.item}>
      <div className={NewsCardStyles.img}>
        <img src={articleItem.imgSrc} alt={articleItem.title} />
      </div>
      <span className={NewsCardStyles.date}>{articleItem.date}</span>
      <div className={NewsCardStyles.title}>{articleItem.title}</div>
      <div className={NewsCardStyles.subtitle}>
        {articleItem.subtitle}
      </div>
      <span className={NewsCardStyles.link}>
        <a href="">{articleItem.link}</a>
      </span>
    </div>
  );
};

export default NewsItem;
