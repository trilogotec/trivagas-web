export const incrementAsync = dispatch => {
  const { authentication } = dispatch;

  return async (payload, rootState) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    authentication.increment(rootState.authentication.count + payload);
  };
}

export default (dispatch) => ({
  incrementAsync: incrementAsync(dispatch),
});