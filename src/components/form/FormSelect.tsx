interface Props {
  options?: { title: any; value: any }[];
  innerRef?: React.LegacyRef<HTMLSelectElement>;
}

const FormSelect = (props: Props) => {
  return (
    <select className='form-select text-center form-select-lg' ref={props.innerRef}>
      {props.options?.map((o) => (
        <option key={o.value} value={o.value}>
          {o.title}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
