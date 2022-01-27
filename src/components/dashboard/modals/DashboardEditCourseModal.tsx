import { updateCourseAction } from 'actions/courses';
import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import { StoreCourseBody } from 'components/interfaces/Services';
import Modal from 'components/shared/Modal';
import { successToast } from 'components/shared/Toast';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'store/rootReducer';
import { getLanguagesEntries } from 'utils/shared';
import DashboardCoursesTabFormContent from '../DashboardCoursesTabFormContent';

const DashboardEditCourseModal = () => {
  const [searchParams] = useSearchParams();
  const imageRef = useRef<HTMLInputElement>(null);
  const state = useSelector((state: RootState) => state);
  const [formDiscarded, setFormDiscarded] = useState<boolean>(false);
  const [formResult, setFormResult] = useState<Partial<StoreCourseBody>>({});

  useEffect(() => {
    const courseId = searchParams.get('course');

    if (searchParams.has('course')) {
      const course = state.courses.courses.find((c) => c.id === +courseId!);

      if (course)
        setFormResult({
          title: course.title,
          lessons: course.lessons,
          description: course.description,
          certification: course.certification,
          language: getLanguagesEntries.find((l) => l.title === course.language)?.value,
        });
    }
  }, [searchParams, state.courses.courses, formDiscarded]);

  const checkCategory = (id: number) => {
    const result = formResult.categories ?? [];
    if (result) {
      const catIndex = formResult.categories?.indexOf(id);

      if (catIndex && catIndex > -1) result.splice(catIndex, 1);
      else result.push(id);

      onFormInputChange('categories', [...result]);
    }
  };

  const onFormInputChange = (input: keyof StoreCourseBody, value: any) => {
    setFormResult({ ...formResult, [input]: value });
  };

  const onSubmit = () => {
    const courseId = searchParams.get('course');

    if (searchParams.has('course')) {
      updateCourseAction(+courseId!, formResult).then(() => successToast('Updated successfully'));
    }
  };

  const onDiscard = () => {
    if (imageRef.current) imageRef.current.value = '';
    setFormDiscarded(true);
  };

  return (
    <Modal title='Edit course' id='edit-course-modal'>
      <div className='content'>
        <DashboardCoursesTabFormContent
          imageRef={imageRef}
          formResult={formResult}
          checkCategory={checkCategory}
          errors={state.validation.errors}
          onFormInputChange={onFormInputChange}
          checkedCategories={formResult.categories ?? []}
        />
        <div className='row mt-5 mb-0'>
          <div className='col'>
            <OutlinedButton className='w-100 btn-rounded' title='Reset All' onClick={onDiscard} />
          </div>
          <div className='col'>
            <RoundedPrimaryButton className='w-100' title='Update course' onClick={onSubmit} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DashboardEditCourseModal;
