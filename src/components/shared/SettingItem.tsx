interface Props {
  title: string;
  description?: string;
}

const SettingItem = (props: Props) => {
  return (
    <div className='setting'>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <p className='text'>{props.title}</p>
              <p className='description'>Receive all your notifications via email</p>
            </div>
          </div>
        </div>
        <div className='col-4 d-flex align-items-center justify-content-end'>
          <div className='form-check form-switch'>
            <input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingItem;
