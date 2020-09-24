const initialState = [];

function animationReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SAVE_ANIMATION':
      // If the saved animation previously had another title, remove the animation with this old title
      let oldAnimationIndex = state.findIndex(item => item.title === action.value.oldTitle);

      if (oldAnimationIndex !== -1) nextState = state.filter((item, index) => index !== oldAnimationIndex);
      else nextState = [...state];

      // If the animation is already saved, replace it; otherwise add it
      let animationIndex = state.findIndex(item => item.title === action.value.title);
      if (animationIndex !== -1) {
        nextState[animationIndex] = action.value;
      } else nextState = [...nextState, action.value];

      if (nextState !== undefined && nextState !== null) nextState.sort((a, b) => (a.title > b.title ? 1 : -1));

      return nextState || state;

    case 'DELETE_ANIMATION':
      animationIndex = state.findIndex(item => item.title === action.value);
      nextState = state.filter((item, index) => index !== animationIndex);

      return nextState || state;

    default:
      return state;
  }
}

export default animationReducer;
