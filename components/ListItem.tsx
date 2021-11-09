import * as React from 'react';
import { Joke } from '../types/Joke';
import ThumbsButton from './ThumbsButton';

type ListItemProps = {
  joke: Joke;
};

const ListItem: React.FC<ListItemProps> = (props: ListItemProps): JSX.Element => (
  <div className="bg-white-regular rounded max-w-2xl h-30 rounded grid grid-cols-1 mb-4 p-2.5">
    <div className="text-xl">{props.joke.setup}</div>
    <div className="text-lg italic">{props.joke.punchline}</div>
    <div className="h-10 w-10 grid grid-rows-1 grid-cols-2 gap-x-2 justify-self-end">
      <ThumbsButton pointedUp={true} joke={props.joke} />
      <ThumbsButton pointedUp={false} joke={props.joke} />
    </div>
  </div>
);

export default ListItem;
