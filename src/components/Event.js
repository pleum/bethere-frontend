import React from 'react';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import EventItem from './EventItem';
import { Link } from 'react-router-dom';

const firestore = firebase.firestore();
const eventRef = firestore.collection('event');

const Achivement = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const achievementId = params.get('id');
  if (!achievementId) return <div>ไม่พบข้อมูล</div>;

  const query = eventRef.where('achievementId', '==', achievementId);
  const { error, loading, value = { empty: true } } = useCollection(query);

  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h1 className="f3 normal">Event</h1>
        <Link className="link light-red" to={{ pathname: '/' }}>
          ย้อนกลับ
        </Link>
      </div>
      {error && <div>มีปัญหาในการดึงข้อมูล</div>}
      {loading ? (
        <div>กำลังโหลดข้อมูล</div>
      ) : value.empty ? (
        <div>ไม่พบข้อมูล</div>
      ) : (
        <div>
          {value.docs.map(doc => (
            <EventItem key={doc.id} event={doc.data()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Achivement;
