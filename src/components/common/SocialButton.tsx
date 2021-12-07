import { ButtonPropsInterface } from 'components/interfaces/Props';
import PrimaryButton from './PrimaryButton';

interface SocialButtonPropsInterface extends ButtonPropsInterface {
  iconClassName: string;
}

const SocialButton = (props: SocialButtonPropsInterface) => {
  return (
    <PrimaryButton title={props.title} className={`btn-primary-rounded ${props.className}`} onClick={props.onClick}>
      <div className='text-center'>
        <i className={`${props.iconClassName} mx-4`}></i>
        {props.title}
      </div>
    </PrimaryButton>
  );
};

export default SocialButton;
