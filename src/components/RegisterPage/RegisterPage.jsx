import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <RegisterForm />

      <center>
        <br />
        <Button
          style={{ backgroundColor: '#0c3d50', color: 'white' }}
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
        <br />
        <br />
        <Footer />
      </center>
    </div>
  );
}

export default RegisterPage;
