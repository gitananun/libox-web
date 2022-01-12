import { SelectPropsInterface } from 'components/interfaces/Props';

const FormSelect = (props: SelectPropsInterface) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.label} className='form-label w-100'>
          {props.label}
        </label>
      )}
      <select
        id={props.label}
        ref={props.innerRef}
        onChange={props.onChange}
        defaultValue={props.defaultValue ?? ''}
        className={`form-select ${props.className ?? ''} ${props.error && 'border-danger'}`}
      >
        <option value={''} disabled>
          Select {props.label?.toLowerCase()}
        </option>
        {props.options?.map((o) => (
          <option key={o.value} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
      {props.error && <div className='invalid-feedback d-block'>{props.error}</div>}
    </>
  );
};

export default FormSelect;
