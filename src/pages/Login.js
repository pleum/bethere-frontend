import React from 'react';
import Button from '../components/Button';

function Login() {
  const signInWithGoogle = () => {
    console.log('Sign in with Google')
  };

  return (
    <div>
      กรุณา <Button onClick={signInWithGoogle}>เข้าสู่ระบบ</Button> ด้วยบัญชี
      Google
    </div>
  );
}

export default Login;
