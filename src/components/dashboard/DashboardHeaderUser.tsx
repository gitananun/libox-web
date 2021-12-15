const DashboardHeaderUser = () => {
  return (
    <div className='d-flex align-items-center header-user'>
      <img
        alt='Amazon'
        className='avatar'
        src='https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg'
      />
      <div>
        <p className='text-capitalize name'>Jennica Persey</p>
        <p className='text-lowercase text-secondary email'>jennica@libox.io</p>
      </div>
    </div>
  );
};
export default DashboardHeaderUser;
