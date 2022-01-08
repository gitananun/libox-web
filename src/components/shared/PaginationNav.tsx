import { Link } from 'react-router-dom';

interface Props {
  last: number;
  current: number;
}

const PaginationNav = (props: Props) => {
  const totalPages = () => {
    const data: number[] = [];
    for (let i = 1; i <= props.last; i++) data.push(i);
    return data;
  };

  return (
    <nav className='pagination-nav mt-5'>
      <ul className='pagination'>
        {totalPages().map((page) => (
          <li className='page-item' key={page}>
            <Link className='page-link' to={`?page=${page}`}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationNav;
