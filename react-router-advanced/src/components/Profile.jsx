import { profile } from 'console';
import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Outlet /> {/* This will render the nested route component */}
    </div>
  );
}

export default profile