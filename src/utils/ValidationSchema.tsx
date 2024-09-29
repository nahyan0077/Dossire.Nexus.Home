import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required').max(100, 'Body must not exceed 100 characters'),
  });