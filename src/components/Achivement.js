import React, { useEffect } from 'react';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import AchivementItem from './AchivementItem';
import NProgress from 'nprogress';

const achievementCollection = firebase.firestore().collection('achievement');

/**
 * Achivement component
 */
const Achivement = () => {
  const { error, loading, value } = useCollection(achievementCollection);

  useEffect(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    if (!loading) NProgress.done();
  }, [loading]);

  return (
    <div className="lh-copy">
      <h1 className="f3 normal">Achivement</h1>
      {error && <div>มีปัญหาในการดึงข้อมูล</div>}
      {loading && <div>กำลังดึงข้อมูล</div>}
      {value && (
        <div>
          {value.docs.map(doc => (
            <AchivementItem key={doc.id} id={doc.id} achivement={doc.data()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Achivement;
