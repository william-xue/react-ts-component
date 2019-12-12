import * as React from "react";

interface IProps {
  marked: boolean;
  starId: string | number;
}

function Star({ marked, starId }: IProps) {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }}>
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}
export default Star;
