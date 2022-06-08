import React from "react";

const PhotoCard = ({ data }) => (
  <div style={{ marginBottom: 90 }}>
    <img src={data.thumbnailUrl} alt={data.title} />
    <h1>{data.title}</h1>
  </div>
);

export default PhotoCard;