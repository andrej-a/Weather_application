import * as yup from 'yup';

const schema = yup
    .object({
        search: yup.string().required().min(1),
    })
    .required();

export default schema;
