import { ButtonPropsInterface } from '../interfaces/Props';
import PrimaryButton from './PrimaryButton';

const RoundedPrimaryButton = (props: ButtonPropsInterface) => {
  return (
    <PrimaryButton
      type={props.type}
      title={props.title}
      className={`btn-primary-rounded ${props.className}`}
      onClick={props.onClick}
    />
  );
};

export default RoundedPrimaryButton;
