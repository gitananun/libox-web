interface Props {
  options?: string[];
}

const FormSelect = (props: Props) => {
  return (
    <select className='form-select text-center form-select-lg'>
      {props.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
