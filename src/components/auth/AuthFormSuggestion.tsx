import { Link } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
  linkText: string;
}

const AuthFormSuggestion = (props: Props) => {
  return (
    <div className='mt-5'>
      <p className='text-secondary'>
        {props.text} &nbsp;<Link to={props.to}>{props.linkText}</Link>
      </p>
    </div>
  );
};

export default AuthFormSuggestion;
