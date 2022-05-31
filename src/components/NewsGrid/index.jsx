import React from "react";
import NewsGridStyles from "./NewsGrid.module.scss";

const Grid = ({ children }) => {
  return (
    <div className={NewsGridStyles.NewsGrid}>
      { children }
    </div>
  );
};

export default Grid;
