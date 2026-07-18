import React from "react";

const Badge = ({ tag }) => {
  if (tag == "Popular") {
    return <div className="badge badge-soft badge-success">{tag}</div>;
  } else if (tag == "Best Seller") {
    return <div className="badge badge-soft badge-primary">{tag}</div>;
  } else {
    return <div className="badge badge-soft badge-error">{tag}</div>;
  }
};

export default Badge;
