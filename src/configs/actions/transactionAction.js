export const transaction = (data) => (dispatch) =>{
    dispatch({ type: 'TRANSACTION', payload: data })
}