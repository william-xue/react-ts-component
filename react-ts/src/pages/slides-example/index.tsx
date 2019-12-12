import * as React from "react";
import { Slides } from "../../components/slides/index";
import "./style.css";
export default function SlidesExample(props: any) {
  return (
    <div className="slides-example">
      <h1>轮播组件</h1>
      <h2>基础用法</h2>
      <Slides autoPlay={true} className="slides">
        <div className="item1 item">1</div>
        <div className="item2 item">2</div>
        <div className="item3 item">3</div>
        <div className="item4 item">4</div>
      </Slides>
    </div>
  );
}
