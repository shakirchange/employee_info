const initialStore = {
  token: "",
  usersResp: []
}
const Reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'SAVE_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'USERS_DATA':
      return {
        ...state,
        usersResp: action.payload
      }
    default:
      return state;
  }
};
export default Reducer;