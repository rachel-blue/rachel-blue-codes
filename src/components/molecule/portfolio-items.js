import { nanoid } from 'nanoid';
import PromptDeck from '../../assets/PromptDeck.png';
import Movies from '../../assets/MyMovies.png';
import GameDevGrit from '../../assets/GameDevGrit.png';

export const portfolioItems = [
  {
    title: 'Prompt Deck',
    image: PromptDeck,
    linkPath: 'https://promptdeck.com/',
    description: 'asdfa',
    id: nanoid(),
  },
  {
    title: 'Movie Gallery',
    image: Movies,
    linkPath: 'https://rachel-blue.github.io/my-movies/#/',
    description: 'asdfds',
    id: nanoid(),
  },
  {
    title: 'GameDev Grit Podcast',
    image: GameDevGrit,
    linkPath: 'https://rachel-blue.github.io/GameDevGrit/',
    description: 'asdf',
    id: nanoid(),
  },
]
