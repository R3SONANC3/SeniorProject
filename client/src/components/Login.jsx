import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '170385751378-bbtp2rf09iorhsustgqors4r1tc7hf6n.apps.googleusercontent.com';

function Login({ onLogin }) {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    // ตรวจสอบว่า response.profileObj มี imageUrl หรือไม่
    if (response.profileObj && response.profileObj.imageUrl) {
      onLogin(response.profileObj);
    } else {
      console.error('Profile image URL not found in response');
      // จัดการกรณีที่ไม่มี imageUrl
    }
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
          Login with Google
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
