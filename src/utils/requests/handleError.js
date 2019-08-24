import { deleteUser } from './../user';

const handleErrorRequest = (error) => {
  const {
    status,
  } = error.response;

  const objectError = {
    code: '',
    msg: '',
  };

  switch (status) {
    case 401:
      objectError.code = 401;
      objectError.msg = 'Sessão expirada :(';
      deleteUser();
      return objectError;
    default:
      objectError;
  }
};

export default handleErrorRequest;