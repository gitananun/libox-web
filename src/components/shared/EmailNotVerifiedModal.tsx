import Modal from './Modal';

const EmailNotVerifiedModal = () => {
  return (
    <Modal
      title='Email not verified'
      id='email-not-verified-modal'
      footerChildren={<small className='text-danger'>Important!!!</small>}
    >
      <h5 className='text-primary mb-3'>Why verify your email?</h5>
      <p className='text-secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae consequatur eaque illo voluptatibus
        illum unde, porro doloremque nostrum non odio ab fugiat voluptates saepe rerum accusantium iusto, amet nesciunt.
      </p>
    </Modal>
  );
};

export default EmailNotVerifiedModal;
