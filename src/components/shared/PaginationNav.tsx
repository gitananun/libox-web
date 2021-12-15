const PaginationNav = () => {
  return (
    <nav className='pagination-nav mt-5'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className='page-link' href='#as' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((page) => (
          <li className='page-item'>
            <a className='page-link' href='#as'>
              {page}
            </a>
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
