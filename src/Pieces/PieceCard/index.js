import React from "react";
import PropTypes from "prop-types";
// import LazyLoad from 'react-lazy-load';

import "./style.css";

const PieceCard = ({ photo }) => {
  // eslint-disable-next-line
  const { index, title, description, imageUrl, width } = photo;

  return (
    <div id={`card-${index}`} className="piece-card">
      <div className="photo">
        {/* <LazyLoad debounce={false}> */}
          <img
            src={imageUrl} 
            alt={`${index + 1}: ${title} [Photography by Simon G. Tsegay]`}
            onContextMenu={`return false;`}
          />
        {/* </LazyLoad> */}
      </div>
      <div className="details">
        <span className="index" />
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

PieceCard.propTypes = {
  photo: PropTypes.object.isRequired
}

export default PieceCard;