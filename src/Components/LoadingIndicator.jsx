import React from 'react';
import Loader from 'react-loader-spinner';

function LoadingIndicator() {
  return (
    <Loader
      className="loader"
      type="Watch"
      color="rgb(39, 200, 39)"
      height={150}
      width={250}
    />
  );
}

export default LoadingIndicator;
