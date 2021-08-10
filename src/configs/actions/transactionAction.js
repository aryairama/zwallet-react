export const transaction = (data) => (dispatch) => {
  dispatch({ type: 'TRANSACTION', payload: data });
};
export const transactionDone = () => (dispatch) => {
  dispatch({ type: 'DELETE_TRANSACTION' });
};
