// components/LoadingSkeleton.js
import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton animation="wave" height={50} />
      <Skeleton animation="wave" height={50} />
      <Skeleton animation="wave" height={50} />
      {/* Add more Skeleton components as needed */}
    </div>
  );
};

export default LoadingSkeleton;
