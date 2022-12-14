const reducer = (state = [], action) => {
  console.log("reducer", state, action);
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }
  if (action.type === "VIEW_USER") {
    return [...state, action.payload];
  }
  return state;
};


  const store = Redux.createStore(reducer);

  
  store.subscribe(() => {
    console.log('subscribe', store.getState());
  });

  store.dispatch({ type: "ADD_USER",payload: [{"id":"123","name":"jack"}] });
  store.dispatch({ type: "VIEW_USER",payload: [{"id":"123","name":"rifqi"}] });
  store.dispatch({ type: "VIEW_USER",payload: [{"id":"123","name":"muhammad"}] });
 