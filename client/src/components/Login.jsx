import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '170385751378-3teihqn74b55q3nf4tc6srft4veslo9g.apps.googleusercontent.com';

function Login({ onLogin }) {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    onLogin(response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <button 
          style={renderProps.disabled ? { ...styles.button, ...styles.disabledButton } : styles.button} 
          onClick={renderProps.onClick} 
          disabled={renderProps.disabled}>
          Login
        </button>
      )}
    />
  );
}

const styles = {
  button: {
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  }
};

export default Login;