const initialState = {
  user: {},
  auth: false,
  allUser: {},
  user_receiver: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
        auth: false,
        allUser:{}
      };
    case 'REFRESHTOKEN':
      return {
        ...state,
        user: action.payload,
      };
    case 'ALL_USER':
      return {
        ...state,
        allUser: action.payload,
      };
    case 'GET_USER_BY_ID':
      return {
        ...state,
        user_receiver: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
