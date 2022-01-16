import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'Learn the importance of ASL in the restaurant business',
  'Learn how to sign "Boat" in ASL!',
  'Learn how useful ASL is in the workplace',
  'Sign language in developing countries',
  'What are other sign languages?',
  'Watch as ASL becomes one of the most dominant languages in the US',
  'I am an ASL student',
  'How to better yourself with ASL',
  'The challenges of language',
  'Learn about thius ASL artist',
  'The importance of ASL in our communities',
  'Recent news on ASL',
  'Learn how to sign fruits in ASL!',
  'Why do I need to know ASL?',
  'Why ASL is fun to learn!',
  'Use ASL to create a brighter future!',
  'Who are these famout people that use ASL?',
  'Is ASL a dying language?',
  'Creativity and ASL!',
  'ASL in small towns',
  'The art of ASL',
  'Why I use ASL every day',
  'Use ASl to reach new heights!'
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
