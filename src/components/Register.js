import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import firebase from '../firebase';

const firestore = firebase.firestore();
const eventRef = firestore.collection('event');

const Register = ({ location, history }) => {
  const params = new URLSearchParams(location.search);
  const eventId = params.get('id');

  const handleOnDelete = e => {
    eventRef.doc(eventId).delete();
    history.push('/')
  };

  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h1 className="f3 normal">Register</h1>
        <div className="flex">
          <div className="link light-red mr2 pointer" onClick={handleOnDelete}>
            ลบ
          </div>
          <Link className="link light-red" to={{ pathname: '/' }}>
            ย้อนกลับ
          </Link>
        </div>
      </div>
      <div>
        <QRCode value={eventId} className="bg-white pa2 w-100" size="512" />
      </div>
    </div>
  );
};

export default Register;
