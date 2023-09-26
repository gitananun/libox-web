import { ButtonPropsInterface } from '../interfaces/Props';

const OutlinedButton = (props: ButtonPropsInterface) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-md btn btn-outline btn-outline-secondary rounded-0 py-3 px-4 ${props.className || ''}`}
    >
      {props.title}
    </button>
  );
};

export default OutlinedButton;
