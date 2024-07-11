import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarHover = (starIndex) => {
        setHoverRating(starIndex);
    };

    const handleStarClick = (starIndex) => {
        onRatingChange(starIndex);
    };

    const renderStar = (starIndex) => {
        if (rating >= starIndex) {
            return <FontAwesomeIcon icon={fasStar} className="star" />;
        } else if (hoverRating >= starIndex) {
            return <FontAwesomeIcon icon={fasStar} className="star" />;
        } else {
            return <FontAwesomeIcon icon={farStar} className="star" />;
        }
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => (
                <span
                    key={index}
                    className="star"
                    onMouseEnter={() => handleStarHover(index + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleStarClick(index + 1)}
                >
                    {renderStar(index + 1)}
                </span>
            ))}
        </div>
    );
};

export default StarRating;