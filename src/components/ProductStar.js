import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<StarIcon key={i} style={{ color: 'black' }} />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalfIcon key={i} style={{ color: 'black' }} />);
    } else {
      stars.push(<StarBorderIcon key={i} style={{ color: 'black' }} />);
    }
  }

  return <div className="flex">{stars}</div>;
}