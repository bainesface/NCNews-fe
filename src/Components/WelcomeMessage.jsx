import React from 'react';

const WelcomeMessage = props => {
  const { name } = props;
  return <p>Welcome {name}</p>;
};

export default WelcomeMessage;
