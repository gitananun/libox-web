import { InputPropsInterface } from 'components/interfaces/Props';

const FormInput = (props: InputPropsInterface) => {
  return (
    <div className={`input-group input-group-lg ${props.search ? 'search-input' : ''}`}>
      <span className={props.search ? 'fa fa-search text-secondary' : ''}></span>
      <input type={props.type} placeholder={props.placeholder} className='form-control form-input' />
    </div>
  );
};

export default FormInput;
