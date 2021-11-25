import { ButtonPropsInterface } from '../interfaces/Props';
import PrimaryButton from './PrimaryButton';

const RoundedPrimaryButton = (props: ButtonPropsInterface) => {
  return <PrimaryButton title={props.title} className='btn-primary-rounded' onClick={props.onClick} />;
};

export default RoundedPrimaryButton;
