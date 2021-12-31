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
          ref={props.innerRef}
          onBlur={props.onBlur}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={obscure ? props.type : 'text'}
          className={`form-control form-input ${props.error && 'border-danger'}`}
        />
        {props.type === 'password' && (
          <span
            className={`input-suffix text-secondary fa fa-eye${!obscure ? '-slash' : ''}`}
            onClick={() => setObscure(!obscure)}
          ></span>
        )}
        {props.error && <div className='invalid-feedback d-block'>{props.error}</div>}
      </div>
    </>
  );
};

export default FormInput;
