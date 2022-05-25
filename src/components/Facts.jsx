import React from "react";
// import "./Facts.scss";
import "./Facts1.scss";

const Facts = ({ data }) => {
  return (
    <div className="fact">
      {data.map((item) => {
        return (
          <div className="fact_item" key={item.id}>
            <div className="fact_icon">{item.icon}</div>
            <div className="fact_text">
              <span className="fact_number">{item.number}</span>
              <span className="fact_title">{item.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facts;
