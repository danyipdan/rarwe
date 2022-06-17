import Controller from '@ember/controller';
import { action } from '@ember/object';
import Band from '../models/band';
import { empty } from '@ember/object/computed';
// import { tracked } from '@glimmer/tracking';

export default class BandsController extends Controller {
  isAddingBand = false;
  // @tracked newBandName = '';
  newBandName = '';

  @empty('newBandName') isAddButtonDisabled

  @action updateBandName(e){
    console.log(this.newBandName);
    this.set('newBandName', e.target.value)
  }
  @action addBand() {
    this.set('isAddingBand', true);
  }

  @action saveBand(e) {
    e.preventDefault()
    console.log('saveBand()', this.newBandName);
    let newBand = Band.create({ name: this.newBandName });
    this.model.pushObject(newBand);
    this.set('newBandName', '');
  }

  @action cancelAddBand() {
    this.set('isAddingBand', false);
  }

}
