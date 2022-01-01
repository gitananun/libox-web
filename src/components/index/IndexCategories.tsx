import SectionTitle from 'components/common/SectionTitle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/rootReducer';

const IndexCategories = () => {
  const categories = useSelector((state: RootState) => state.categories.categories.slice(0, 6));

  const images = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1596495578066-1aac1b785b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    'https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80',
  ];

  return (
    <div className='index-categories section'>
      <div className='container-fluid'>
        <SectionTitle title='Favorite Categories' lead='Find the best category for your future profession' />
        <div className='row d-flex justify-content-center text-center align-items-center'>
          {categories.map((c, i) => (
            <div className='category-single col-10 col-md-4 col-lg-3' key={c.id}>
              <img src={images[i]} alt='category' />
              <div className='category-name blur-container-light'>
                <Link to={`/categories/${c.slug}`} className='text-light'>
                  <h3>{c.name}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexCategories;
