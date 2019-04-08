import React, { useContext } from 'react';
import firebase from '../firebase';
import Button from './Button';
import Achivement from './Achivement';
import { UserContext } from '../context';

const Home = () => {
  const user = useContext(UserContext);

  const handleOnSignOutClicked = () => {
    firebase.auth().signOut();
  };

  if (!user) return <div>ไม่พบข้อมูลผู้ใช้</div>;
  return (
    <div>
      <div className="mb4">
        สวัสดีคุณ, {user.displayName.split(' ')[0]}{' '}
        <Button onClick={handleOnSignOutClicked}>ออกจากระบบ</Button>
      </div>
      <Achivement />
    </div>
  );
};

export default Home;
