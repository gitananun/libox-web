import { ButtonPropsInterface } from '../interfaces/Props';

const PrimaryButton = (props: ButtonPropsInterface) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-md btn-primary border-0 rounded-0 py-3 px-4 ${props.className}`}
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
