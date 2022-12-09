import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <LoginForm />

      <center>
        <p>New to #foresight?</p>
        <Button
          style={{ backgroundColor: '#0c3d50', color: 'white' }}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
        <br />
        <br />
        <Footer />
      </center>
    </div>
  );
}

export default LoginPage;
