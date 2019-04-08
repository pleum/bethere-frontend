import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

/**
 * NotFound component
 */
const NotFound = () => {
  return (
    <div>
      ไม่พบหน้าที่คุณต้องการ{' '}
      <Link to="/" className="link">
        <Button>ย้อนกลับ</Button>
      </Link>
    </div>
  );
};

export default NotFound;
