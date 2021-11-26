const SearchWrapper = (props: any) => {
  return (
    <div className='w-100 position-relative'>
      <div className='d-flex justify-content-center blue-container container border ' id='search-wrapper'>
        {props.children}
      </div>
    </div>
  );
};

export default SearchWrapper;
