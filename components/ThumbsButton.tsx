import Image from 'next/image';
import ThumbsUp from '../public/thumbs-up.svg';
import ThumbsUpHighlighted from '../public/thumbs-up-highlighted.svg';
import ThumbsDown from '../public/thumbs-down.svg';
import * as React from 'react';
import { PopularityContext } from '../contexts/PopularityContext';
import { ActionType } from '../contexts/ActionTypes';
import { Joke } from '../types/Joke';

type ThumbsButtonProps = {
  pointedUp: boolean;
  joke: Joke;
};

const ThumbsButton: React.FC<ThumbsButtonProps> = (props: ThumbsButtonProps) => {
  const { dispatch, state } = React.useContext(PopularityContext);
  const [hovered, setHovered] = React.useState<boolean>(false);

  const addToLiked = () =>
    dispatch!({
      type: ActionType.ADD_TO_LIKED,
      payload: { joke: props.joke, defaultList: undefined },
    });

  const removeFromLiked = () =>
    dispatch!({
      type: ActionType.REMOVE_FROM_LIKED,
      payload: { joke: props.joke, defaultList: undefined },
    });

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        props.pointedUp ? addToLiked() : removeFromLiked();
      }}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      {props.pointedUp ? (
        <Image
          src={hovered || state?.likedJokes.find((joke) => joke.id === props.joke.id) ? ThumbsUpHighlighted : ThumbsUp}
          alt="thumbs up icon"
          className="h-10 w-10"
        />
      ) : (
        <Image src={ThumbsDown} alt="thumbs down icon" className="h-10 w-10 " />
      )}
    </button>
  );
};

export default ThumbsButton;
