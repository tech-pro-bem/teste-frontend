import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const { children } = props;

  const [catAndDog, setCatAndDog] = useState({
    cat: 'Gatinhos',
    dog: 'Doguinhos',
  });

  const [dogImage, setDogImage] = useState('');
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={ { catAndDog,
        setCatAndDog,
        dogImage,
        setDogImage,
        catImage,
        setCatImage,
        loading,
        setLoading } }
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
