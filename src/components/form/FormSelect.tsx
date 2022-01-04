import { SelectPropsInterface } from 'components/interfaces/Props';

const FormSelect = (props: SelectPropsInterface) => {
  return (
    <select className='form-select text-center form-select-lg' ref={props.innerRef} defaultValue={props.defaultValue}>
      {props.options?.map((o) => (
        <option key={o.value} value={o.value}>
          {o.title}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
