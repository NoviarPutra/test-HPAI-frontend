import React from "react";

const Gap = ({ className, height, width }) => {
  return (
    <div className={className} style={{ height: height, width: width }}></div>
  );
};

export default Gap;
