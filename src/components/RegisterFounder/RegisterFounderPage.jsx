import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterFounderForm from './RegisterFounderForm';

function RegisterFounderPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterFounderForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterFounderPage;
