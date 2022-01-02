import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "40px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};
