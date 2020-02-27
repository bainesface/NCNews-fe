import React from 'react';
import Loader from 'react-loader-spinner';

function LoadingIndicator() {
  return (
    <Loader
      className="loader"
      type="Watch"
      color="#08090a"
      height={150}
      width={250}
    />
  );
}

export default LoadingIndicator;
