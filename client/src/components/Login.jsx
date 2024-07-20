import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '170385751378-3teihqn74b55q3nf4tc6srft4veslo9g.apps.googleusercontent.com';

function Login() {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    // Handle the successful login here
  };

  const onFailure = (response) => {
    if (response.error === 'popup_closed_by_user') {
      console.log('The login popup was closed by the user.');
    } else {
      console.log('Login Failed:', response);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <button 
            style={renderProps.disabled ? { ...styles.button, ...styles.disabledButton } : styles.button} 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
            Login
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
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
