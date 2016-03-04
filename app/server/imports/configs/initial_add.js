import { Questions } from '/libs/collections';
import Seeds from './seed';

export default () => {
  if (!Questions.findOne()) {
    Seeds.forEach((seed) => {
      Questions.insert(seed);
    });
  }
};
