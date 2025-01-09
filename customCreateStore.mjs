export function createStore(reducer) {
  let state;
  let subscribeCallback = [];

  const store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);

      if (subscribeCallback.length) {
        subscribeCallback.forEach((listener) => listener());
      }
    },

    subscribe(callback) {
      subscribeCallback.push(callback);
      
      return () => {
        subscribeCallback = subscribeCallback.filter((listener) => listener !== callback )
      };
    },
  };

  store.dispatch({type: '@@INIT'})  
  return store;
}
