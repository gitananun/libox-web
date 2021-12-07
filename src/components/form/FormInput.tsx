import { InputPropsInterface } from 'components/interfaces/Props';

const FormInput = (props: InputPropsInterface) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.label} className='form-label w-100'>
          {props.label}
        </label>
      )}
      <div className={`input-group input-group-lg ${props.search ? 'search-input' : ''} ${props.className ?? ''}`}>
        <span className={props.search ? 'fa fa-search text-secondary' : ''}></span>
        <input type={props.type} id={props.label} placeholder={props.placeholder} className='form-control form-input' />
      </div>
    </>
  );
};

export default FormInput;
