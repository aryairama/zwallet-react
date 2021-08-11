const initialState = {
  transaction: {},
  transactionId: {},
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
    case 'GET_TRANSACTION_BY_ID':
      return {
        ...state,
        transactionId: action.payload,
      };
    case 'DELETE_ALL_TRANSACTION':
      return {
        ...state,
        transaction: {},
        transactionId: {},
        transactionList: {},
      };
    default:
      return state;
  }
};
export default transactionReducer;
