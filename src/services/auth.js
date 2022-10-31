import usersMock from '../utils/userMock';

export function signIn(data) {
  // return api.post('/auth/signin', data);
  const userFromMock =
    usersMock.find((user) => user.email === data.email) || {};

  return {
    data: {
      token: 'tokenfrommock',
    },
    user: userFromMock,
  };
}

export function signUp(data) {
  // return api.post('/auth/signup', data);
  usersMock.push(data);
  return {
    data: {
      token: 'tokenfrommock',
    },
    user: data,
  };
}
