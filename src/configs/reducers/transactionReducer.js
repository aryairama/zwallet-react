const initialState = {
  transaction: {},
  transactionList: {}
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
<<<<<<< HEAD
        transaction: {},
      };

=======
        transaction: {}
      }
    case 'GET_TRANSACTION':
      return{
        ...state,
        transactionList: action.payload
      }
>>>>>>> f8f4317388713e96bbfc28fd17244116220bc4d8
    default:
      return {
        ...state,
      };
  }
};
export default transactionReducer;
