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
          accept={props.accept}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          required={props.required || false}
          readOnly={props.readOnly || false}
          type={obscure ? props.type : 'text'}
          className={`form-control form-input ${props.error && 'border-danger'}`}
        />
        {props.type === 'password' && !props.withoutObscure && (
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
