import React from "react";
import NewsListStyles from "./NewsList.module.scss";

const Grid = ({ children }) => {
  return (
    <div className={NewsListStyles.article}>
      { children };
    </div>
  );
};

export default Grid;
