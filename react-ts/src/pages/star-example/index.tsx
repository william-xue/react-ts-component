import * as React from "react";
import { StarRating } from "../../components/starRating/index";
import "./style.css";
export default function StarExample(props: any) {
  return (
    <div className="slides-example">
      <h1>StarRating组件</h1>
      <h2>基础用法</h2>
      <StarRating rating={0}></StarRating>
      <StarRating rating={1}></StarRating>
      <StarRating rating={2}></StarRating>
      <StarRating rating={3}></StarRating>
      <StarRating rating={4}></StarRating>
      <StarRating rating={5}></StarRating>
    </div>
  );
}
