import { ErrorMessage } from '../../../const/errorMesages';

export const autorizationFields = [
  {
    name: 'login',
    labelText: 'Логин',
    errorMessage: ErrorMessage.NO_WHITESPACES_AND_MIN_LENGTH_3,
  },
  {
    name: 'password',
    labelText: 'Пароль',
    type: 'password',
    errorMessage: ErrorMessage.MIN_LENGTH_5,
  },
];

export const registrationFields = [
  { name: 'name', labelText: 'Имя', errorMessage: 'Максимальная длина 15 символов' },
  { name: 'login', labelText: 'Логин', errorMessage: ErrorMessage.NO_WHITESPACES_AND_MIN_LENGTH_3 },
  {
    name: 'password',
    labelText: 'Пароль',
    type: 'password',
    errorMessage: ErrorMessage.MIN_LENGTH_5,
  },
];

export const deleteBoardfields = [
  {
    name: 'title',
    labelText: 'Действительно удалить доску?',
    isdisabled: true,
  },
];

export const columnfields = [
  { name: 'title', errorMessage: 'Title is required', placeholder: 'Column Title' },
];

export const newBoardFields = [
  { name: 'title', errorMessage: 'Название обязательно', placeholder: 'Введите название доски' },
  {
    name: 'description',
    errorMessage: 'Описание обязательно',
    placeholder: 'Введите описание доски',
  },
];
