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
        defaultValue={props.defaultValue}
        className={`form-select ${props.className ?? ''}`}
      >
        {props.options?.map((o) => (
          <option key={o.value} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormSelect;
