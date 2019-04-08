import React from 'react';
import firebase from '../firebase';
import Button from './Button';

/**
 * Login component
 */
const Login = () => {
  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      กรุณา <Button onClick={signInWithGoogle}>เข้าสู่ระบบ</Button> ด้วยบัญชี
      Google
    </div>
  );
};

export default Login;
