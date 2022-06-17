import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StarRatingComponent extends Component {
  @tracked rating = this.args.rating;
  @tracked maxRating = 5;

  get stars() {
    const starsArray = [];

    for (let i = 1; i <= this.maxRating; i++) {
      starsArray.push({ rating: i, isFull: this.rating >= i });
    }
    return starsArray;
  }

  @action setRating(newRating) {
    console.log({ newRating });
    this.args.item.set('rating', newRating);
    this.rating = newRating;
  }
}
