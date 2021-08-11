const initialState = {
  topUp: {},
  topUpDetail: {},
  topUpStatus: {}
};
const topUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TOPUP':
      return {
        ...state,
        topUp: action.payload,
      };
    case 'GET_TOPUP_ID':
      return {
        ...state,
        topUpDetail: action.payload,
      };
    case 'CHANGE_STATUS':
        return {
            ...state,
            topUpStatus: action.payload
        }
    default:
      return state;
  }
};
export default topUpReducer;
