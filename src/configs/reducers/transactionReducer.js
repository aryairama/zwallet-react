const initialState = {
  transaction: {},
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

    default:
      return {
        ...state,
      };
  }
};
export default transactionReducer;
