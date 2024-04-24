const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getSomething = {
  getIsLoggedIn,
  getUserName,
};

export default getSomething;
