import Data from './shop.data';

const INITIAL_STATE = {
  collections: Data
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;