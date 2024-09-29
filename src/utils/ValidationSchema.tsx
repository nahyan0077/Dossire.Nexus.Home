import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .trim() // Automatically trims the input
    .required('Title is required')
    .test(
        'no-consecutive-spaces',
        'Body must not have more than 3 consecutive spaces',
        (value) => {
          return !/\s{4,}/.test(value || '');
        }
      ),
  body: Yup.string()
    .trim() // Automatically trims the input
    .required('Body is required')
    .max(50, 'Body must not exceed 50 characters')
    .test(
      'no-consecutive-spaces',
      'Body must not have more than 3 consecutive spaces',
      (value) => {
        return !/\s{4,}/.test(value || '');
      }
    ),
});
