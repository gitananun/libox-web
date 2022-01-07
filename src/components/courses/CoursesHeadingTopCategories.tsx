import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

interface Props {
  onCategory(slug: string, id: string): void;
}

const CoursesHeadingTopCategories = (props: Props) => {
  const state = useSelector((state: RootState) => state);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const onClick = (slug: string, id: string) => {
    setActiveCategory(slug);
    props.onCategory(slug, id);
  };

  return (
    <div className='courses-nav-tabs-wrapper'>
      <ul className='nav nav-tabs' role='tablist'>
        {state.categories.categories.slice(0, 4).map((c) => (
          <li className={`nav-item ${c.slug === activeCategory ? 'active' : ''}`} key={c.id}>
            <p
              role='tab'
              data-toggle='tab'
              className='nav-link active'
              onClick={() => onClick(c.slug, c.id.toString())}
            >
              {c.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesHeadingTopCategories;
