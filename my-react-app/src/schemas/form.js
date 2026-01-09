import * as yup from 'yup'

export const registerSchema = yup.object({
  login: yup
    .string()
    .required('Введите ник')
    .min(3, 'Минимум 3 символа'),

  email: yup
    .string()
    .email('Некорректная почта')
    .required('Введите почту'),

  password: yup
    .string()
    .min(6, 'Минимум 6 символов')
    .required('Введите пароль'),

  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Повторите пароль'),

  promo: yup.string().nullable(),

  rights: yup
    .boolean()
    .oneOf([true], 'Необходимо согласие'),
})
export const loginSchema = yup.object({
  login: yup.string().required('Введите логин или email'),
  password: yup.string().required('Введите пароль'),
})
