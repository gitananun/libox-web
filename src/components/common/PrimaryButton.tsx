import { ButtonPropsInterface } from '../interfaces/Props';

const PrimaryButton = (props: ButtonPropsInterface) => {
  return (
    <button className='btn btn-md btn-primary border-0 rounded-0 py-3 px-4' onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default PrimaryButton;
