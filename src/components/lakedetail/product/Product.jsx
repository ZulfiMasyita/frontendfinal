import React, { Component } from "react";
import "./productl.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={img} alt="" className="p-img" />
    </div>
  );
};

export default Product;
