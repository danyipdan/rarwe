import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StarRatingComponent extends Component {
  
  get stars() {
    const { rating } = this.args;
    const maxRating = 5;
    const starsArray = [];

    for (let i = 1; i <= maxRating; i++) {
      starsArray.push({ rating: i, isFull: rating >= i });
    }

    return starsArray;
  }

  @action setRating(newRating) {
    const { item, updateStar } = this.args;

    updateStar(item, newRating);
  }
}
