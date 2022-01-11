import { TextAreaPropsInterface } from 'components/interfaces/Props';

const FormTextArea = (props: TextAreaPropsInterface) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.label} className='form-label w-100'>
          {props.label}
        </label>
      )}
      <div className='input-group'>
        <textarea
          id={props.label}
          rows={props.rows ?? 6}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required || false}
          readOnly={props.readOnly || false}
          className={`form-control form-input ${props.error && 'border-danger'} ${props.className ?? ''}`}
        >
          {props.value}
        </textarea>

        {props.error && <div className='invalid-feedback d-block'>{props.error}</div>}
      </div>
    </>
  );
};

export default FormTextArea;
