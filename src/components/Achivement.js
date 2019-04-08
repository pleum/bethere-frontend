import React from 'react';
import firebase from '../firebase';
import { useList } from 'react-firebase-hooks/database';
import AchivementItem from './AchivementItem';

const bethereRef = firebase.database().ref('bethere');
const archivementRef = bethereRef.child('event');

/**
 * Achivement component
 */
const Achivement = () => {
  const { error, loading, value } = useList(archivementRef);

  return (
    <div className="lh-copy">
      <h1 className="f3 normal">Achivement</h1>
      {loading ? (
        <div>กำลังโหลดข้อมูล</div>
      ) : error ? (
        <div>มีปัญหาในการดึงข้อมูล</div>
      ) : value ? (
        <div>
          {value.map((a, i) => (
            <AchivementItem key={i} item={a.val()} />
          ))}
        </div>
      ) : (
        <div>ไม่พบข้อมูล</div>
      )}
    </div>
  );
};

export default Achivement;
