import * as React from 'react';
import { ActionType } from './ActionTypes';
import { Joke } from '../types/Joke';

// jose.nunes@orion.com
//tiago.sa@orion.com

type Props = {
  children: React.ReactNode;
};

export interface AddToLikedJokesAction {
  type: ActionType;
  payload: {
    joke?: Joke;
    defaultList?: Joke[];
  };
}

type PopularityState = {
  defaultList: Joke[];
  likedJokes: Joke[];
};

interface ContextProps {
  dispatch: React.Dispatch<AddToLikedJokesAction>;
  state: PopularityState;
}

function reducer(state: PopularityState, action: AddToLikedJokesAction): PopularityState {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_DEFAULT_LIST:
      return {
        ...state,
        defaultList: payload.defaultList ? payload.defaultList : [],
      };
    case ActionType.ADD_TO_LIKED:
      if (payload.joke == undefined) {
        throw new Error('Joke was undefined!');
      }
      // If the initial state of the array is empty
      if (state.likedJokes.length === 0) {
        return { ...state, likedJokes: [...state.likedJokes, payload.joke] };
      }
      // If the item already exists just return state
      if (state.likedJokes.find((joke) => joke.id === payload.joke?.id)) {
        return state;
      }
      // Return updated state otherwise
      return { ...state, likedJokes: [...state.likedJokes, payload.joke] };
    case ActionType.REMOVE_FROM_LIKED:
      return { ...state, likedJokes: [...state.likedJokes.filter((joke) => payload.joke?.id !== joke.id)] };
    default:
      return state;
  }
}

export const PopularityContext = React.createContext<Partial<ContextProps>>({});

const PopularityContextWrapper: React.FC<Props> = (props: Props): JSX.Element => {
  const initialState: PopularityState = {
    defaultList: [],
    likedJokes: [],
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PopularityContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </PopularityContext.Provider>
  );
};

export default PopularityContextWrapper;
