import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [catAndDog, setCatAndDog] = useState({
    cat: 'Gerar Gatinhos',
    dog: 'Gerar Doguinhos',
    catImage: '',
    dogImage: '',
  });

  return (
    <AuthContext.Provider value={ { catAndDog, setCatAndDog } }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
