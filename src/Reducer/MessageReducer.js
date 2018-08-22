export const MessageReducer = (
  state = {
    urls: {
      user1:
        "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg",
      user2:
        "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
    },
    messages: [
      {
        user: "user1",
        msg: "Msg1"
      },
      { user: "user2", msg: "Msg2" }
    ],
    currentUser: "user1"
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_USER":
      return Object.assign({}, state, { currentUser: action.currentUser });

    case "ADD_MESSAGE":
      let oldMessages = state.messages;
      oldMessages.push(action.msg);
      return Object.assign({}, state, { messages: oldMessages });
    default:
      return state;
  }
};
