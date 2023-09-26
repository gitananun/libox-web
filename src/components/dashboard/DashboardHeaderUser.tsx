import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const DashboardHeaderUser = () => {
  const user = useSelector((state: RootState) => state.auth.user!);

  return (
    <div className='d-flex align-items-center justify-content-center justify-content-md-start header-user'>
      <img src={user.avatar} className='avatar' alt='Amazon' />
      <div>
        <p className='text-capitalize name'>{user.fullName}</p>
        <p className='text-lowercase text-secondary email'>{user.email}</p>
      </div>
    </div>
  );
};
export default DashboardHeaderUser;
