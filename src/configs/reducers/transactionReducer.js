const initialState = {
  transaction: {},
  transactionList: {},
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION':
      return {
        ...state,
        transaction: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transaction: {},
      };
    case 'GET_TRANSACTION':
      return {
        ...state,
        transactionList: action.payload,
      };
    case 'DELETE_ALL_TRANSACTION':
      return {
        ...state,
        transaction: {},
        transactionList: {},
      };
    default:
      return state;
  }
};
export default transactionReducer;
