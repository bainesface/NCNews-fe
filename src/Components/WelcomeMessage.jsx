import React from 'react';
import { Link } from '@reach/router';

const WelcomeMessage = props => {
  const { name, username } = props;
  return (
    <p className="welcomeMessage">
      Welcome{' '}
      <Link className="usernameLink" to={`/users/${username}`}>
        {name}
      </Link>
    </p>
  );
};

export default WelcomeMessage;
