import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const { children } = props;

  const catAndDog = {
    cat: 'Gerar Gatinhos',
    dog: 'Gerar Doguinhos',
  };

  return (
    <AuthContext.Provider value={ { catAndDog } }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
