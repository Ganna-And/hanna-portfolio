import React from 'react';
import { Link } from 'react-router-dom';

const MissingPage = () => {
  return (
    <h1>
      Page doesn't exist. Go back{' '}
      <Link to="/">to the home page</Link> for further navigation.
    </h1>
  );
};

export default MissingPage;