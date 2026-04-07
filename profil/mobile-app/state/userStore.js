let user = null;

export const setUser = (data) => {
  user = data;
};

export const getStoredUser = () => {
  return user;
};