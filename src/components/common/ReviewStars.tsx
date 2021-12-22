import { ClassNameInterface } from 'components/interfaces/Props';

interface Props extends ClassNameInterface {
  rating: number;
}

const ReviewStars = (props: Props) => {
  return (
    <ul className='list-unstyled d-flex'>
      {[...Array(props.rating)].map((v, i) => (
        <li key={i}>
          <i className={`fa fa-star review-star ${props.className ?? ''}`}></i>
        </li>
      ))}
      {[...Array(5 - props.rating)].map((v, i) => (
        <li key={i}>
          <i className={`far fa-star review-star ${props.className ?? ''}`}></i>
        </li>
      ))}
    </ul>
  );
};

export default ReviewStars;
