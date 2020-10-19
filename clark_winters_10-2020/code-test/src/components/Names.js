import React from 'react';
import PropTypes from 'prop-types';

const Names = ({showNames}) => {
  const groupOne = [
    'Matt Johnson',
    'Bart Paden',
    'Ryan Doss',
    'Miguel Solano'
  ];
  const groupTwo = [
    'Matt Johnson',
    'Bart Paden',
    'Jordan Heigle',
    'Tyler Viles'
  ];
  const getUniqueNames = names => {
    return names.reduce((uniqueNames, name) => {
      if (uniqueNames.findIndex(item => item === name) === -1) {
        return uniqueNames.concat(name);
      } else {
        return uniqueNames;
      }
    }, []);
  }
  if (showNames) {
    return (
      <ul>
        {getUniqueNames(groupOne.concat(groupTwo)).map(name => {
          return <li key={name}>{name}</li>
        })}
      </ul>
    );
  } else {
    return null;
  }
}

Names.propTypes = {
  showNames: PropTypes.bool.isRequired
}

export default Names;