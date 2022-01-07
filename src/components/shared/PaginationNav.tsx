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
        <li className='page-item'>
          <a className='page-link' href='#as' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </a>
        </li>
        {totalPages().map((page) => (
          <li className='page-item' key={page}>
            <Link className='page-link' to={`?page=${page}`}>
              {page}
            </Link>
          </li>
        ))}

        <li className='page-item'>
          <a className='page-link' href='#as' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
            <span className='sr-only'>Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationNav;
