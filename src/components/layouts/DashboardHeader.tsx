import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import DashboardHeaderUser from 'components/dashboard/DashboardHeaderUser';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

interface Props {
  onLogout(): void;
}

const DashboardHeader = (props: Props) => {
  const state = useSelector((state: RootState) => state);

  return (
    <div className='container dashboard-header mb-4'>
      <div className='row'>
        <div className='col mb-3 mb-md-0'>
          <DashboardHeaderUser />
        </div>
        <div className='col d-flex align-items-center icons justify-content-center justify-content-md-end gap-4'>
          <i
            data-toggle='modal'
            className={`fal fa-bell ${!state.auth.user?.emailVerifiedAt ? 'forbidden' : ''}`}
            data-target={!state.auth.user?.emailVerifiedAt ? '#email-not-verified-modal' : '#notifications-modal'}
          ></i>
          <span className='divider'>|</span>
          <i className='fal fa-cog' data-toggle='modal' data-target='#settings-modal'></i>
          <RoundedPrimaryButton title='Logout' onClick={props.onLogout} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
