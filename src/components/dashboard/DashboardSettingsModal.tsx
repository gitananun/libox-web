import Modal from 'components/shared/Modal';
import SettingItem from 'components/shared/SettingItem';

const DashboardSettingsModal = () => {
  return (
    <Modal id='settings-modal' title='settings' footerChildren={<p className='footer-text'>Make all default</p>}>
      {['Email notifications', 'SMS notifications', 'New deals notifications'].map((e) => (
        <SettingItem title={e} key={e} />
      ))}
    </Modal>
  );
};

export default DashboardSettingsModal;
