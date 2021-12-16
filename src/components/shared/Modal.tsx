interface Props {
  id: string;
  title?: string;
  children?: any;
  footerChildren?: any;
}

const Modal = (props: Props) => {
  return (
    <div className='modal' id={props.id} tabIndex={-1} role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title text-capitalize'>{props.title}</p>
            <i className='close fa fa-times' data-dismiss='modal'></i>
          </div>
          <div className='modal-body'>{props.children}</div>
          <div className='modal-footer justify-content-start mx-2'>{props.footerChildren}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
