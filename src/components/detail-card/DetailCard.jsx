import React from "react";

import { getFirstImageFromAlbum } from "../../utils";
import "./detail-card.css";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        className="cardImg"
        src={getFirstImageFromAlbum(item?.userId)}
        alt="thumbnail"
        onClick={() => navigate(`/album/${item?.id}`)}
      />
      <div
        className="card-content"
        onClick={() => navigate(`/album/${item?.id}`)}
      >
        <span className="card-content-title">
          <b>Title: </b> {item?.title}
        </span>
        <span className="card-content-albumId">
          <b>Album Id:</b> {item?.id}
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
