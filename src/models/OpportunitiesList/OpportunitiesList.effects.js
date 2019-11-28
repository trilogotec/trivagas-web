export const incrementAsync = dispatch => {
  const { opportunitiesList } = dispatch;

  return async (payload, rootState) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    opportunitiesList.increment(rootState.opportunitiesList.count + payload);
  };
}

export default (dispatch) => ({
  incrementAsync: incrementAsync(dispatch),
});