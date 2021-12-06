import { ButtonPropsInterface } from 'components/interfaces/Props';
import PrimaryButton from './PrimaryButton';

interface SocialButtonPropsInterface extends ButtonPropsInterface {
  iconClassName: string;
}

const SocialButton = (props: SocialButtonPropsInterface) => {
  return (
    <PrimaryButton title={props.title} className={`btn-primary-rounded ${props.className}`} onClick={props.onClick}>
      <div className='row'>
        <div className='col-4 text-end'>
          <i className={props.iconClassName}></i>
        </div>
        <div className='col-6 text-start'>{props.title}</div>
        <div className='col'></div>
      </div>
    </PrimaryButton>
  );
};

export default SocialButton;
