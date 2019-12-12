import * as React from "react";
import Star from "./Star";

interface IProps {
  rating: number;
}

function StarRating(props: IProps) {
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );

  const [selection, setSelection] = React.useState(0);
  const hoverOver = (event: any) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      val = event.target.getAttribute("star-id");
    }
    setSelection(val);
  };

  const handleClick = (event: any) => {
    setRating(event.target.getAttribute("star-id") || rating);
  };

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={handleClick}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
      <span style={{ marginLeft: "10px", fontSize: "12px" }}>
        {selection ? selection : rating}
      </span>
    </div>
  );
}

export default StarRating;
