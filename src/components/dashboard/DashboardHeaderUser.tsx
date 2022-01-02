import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const DashboardHeaderUser = () => {
  const user = useSelector((state: RootState) => state.auth.user!);

  return (
    <div className='d-flex align-items-center justify-content-center justify-content-md-start header-user'>
      <img
        alt='Amazon'
        className='avatar'
        src='https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg'
      />
      <div>
        <p className='text-capitalize name'>{user.fullName}</p>
        <p className='text-lowercase text-secondary email'>{user.email}</p>
      </div>
    </div>
  );
};
export default DashboardHeaderUser;
