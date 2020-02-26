import React from 'react';

const ErrorPage = props => {
  const { status, data } = props.err;

  return (
    <main>
      <h2>Error</h2>
      <p>{data.msg}</p>
      <p>Status code: {status}</p>
    </main>
  );
};

export default ErrorPage;
