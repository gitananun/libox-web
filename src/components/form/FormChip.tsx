import { ChipPropsInterface } from 'components/interfaces/Props';

const FormChip = (props: ChipPropsInterface) => {
  return (
    <div onClick={props.onClick} className={`form-chip ${props.checked ? 'checked' : ''} radius-5`}>
      {props.label}
    </div>
  );
};

export default FormChip;
