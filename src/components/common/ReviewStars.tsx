const ReviewStars = () => {
  return (
    <ul className='list-unstyled d-flex'>
      {[1, 2, 3, 4, 5].map(() => (
        <li>
          <i className='fa fa-star review-star'></i>
        </li>
      ))}
    </ul>
  );
};

export default ReviewStars;
