import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import firebase from '../firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

const firestore = firebase.firestore();
const achievementRef = firestore.collection('achievement');
const eventRef = firestore.collection('event');

const CreateEvent = ({ location, history }) => {
  const params = new URLSearchParams(location.search);
  const achievementId = params.get('id');
  if (!achievementId) return <div>ไม่พบข้อมูล</div>;

  const query = achievementRef.doc(achievementId);
  const { error, loading, value } = useDocument(query);

  const [startDate, setStartDate] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleDateChange = e => {
    setStartDate(e);
  };

  const handleEventNameChange = e => {
    setEventName(e.target.value);
  };

  const handleEventLocationChange = e => {
    setEventLocation(e.target.value);
  };

  const handleOnSubmitClicked = () => {
    eventRef.add({
      achievementId: achievementId,
      name: eventName,
      location: eventLocation,
      startDate
    });

    history.goBack();
  };

  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h1 className="f3 normal">สร้างกิจกรรมใหม่</h1>
        <div>
          <Link className="link light-red" to={{ pathname: '/' }}>
            ย้อนกลับ
          </Link>
        </div>
      </div>
      {error && <div>มีปัญหาในการโหลดข้อมูล</div>}
      {loading ? (
        <div>กำลังโหลดข้อมูล</div>
      ) : !value.exists ? (
        <div>ไม่พบข้อมูล</div>
      ) : (
        <div>
          <div className="measure mb3">
            <label htmlFor="name" className="f6 db mb2">
              ชื่อกิจกรรม
            </label>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              value={eventName}
              onChange={handleEventNameChange}
            />
          </div>
          <div className="measure mb3">
            <label htmlFor="name" className="f6 db mb2">
              สถานที่
            </label>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              value={eventLocation}
              onChange={handleEventLocationChange}
            />
          </div>
          <div className="measure mb3">
            <label htmlFor="name" className="f6 db mb2">
              วันที่
            </label>
            <DatePicker
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              selected={startDate}
              timeFormat="HH:mm"
              timeIntervals={1}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              showTimeSelect
              onChange={handleDateChange}
            />
          </div>
          <div className="measure">
            <button onClick={handleOnSubmitClicked}>สร้างกิจกรรม</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
