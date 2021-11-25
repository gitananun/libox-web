const SearchWrapper = (props: any) => {
  return (
    <div className='d-flex justify-content-center blue-container container border' id='search-wrapper'>
      {props.children}
    </div>
  );
};

export default SearchWrapper;
