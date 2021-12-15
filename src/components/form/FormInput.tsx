import { InputPropsInterface } from 'components/interfaces/Props';
import { useState } from 'react';

const FormInput = (props: InputPropsInterface) => {
  const [obscure, setObscure] = useState(true);

  return (
    <>
      {props.label && (
        <label htmlFor={props.label} className='form-label w-100'>
          {props.label}
        </label>
      )}
      <div className={`input-group input-group-lg ${props.search ? 'search-input' : ''} ${props.className ?? ''}`}>
        <span className={props.search ? 'fa fa-search text-secondary' : ''}></span>
        <input
          id={props.label}
          value={props.value}
          placeholder={props.placeholder}
          className='form-control form-input'
          type={obscure ? props.type : 'text'}
        />
        {props.type === 'password' && (
          <span
            className={`input-suffix text-secondary fa fa-eye${!obscure ? '-slash' : ''}`}
            onClick={() => setObscure(!obscure)}
          ></span>
        )}
      </div>
    </>
  );
};

export default FormInput;
