export const changeUser = user => {
  return {
    type: "CHANGE_USER",
    currentUser: user
  };
};

export const addMessage = (user, message) => {
  return {
    type: "ADD_MESSAGE",
    msg: {
      user: user,
      msg: message
    }
  };
};
