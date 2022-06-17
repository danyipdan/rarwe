import Controller from '@ember/controller';
import { action } from '@ember/object';
import Band from '../models/band';
import { empty } from '@ember/object/computed';
import { service } from "@ember/service";
export default class BandsController extends Controller {
  @service router;

  isAddingBand = false;
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
    this.setProperties({
      newBandName: '',
      isAddingBand: false,
    });
    this.router.transitionTo('bands.band.songs', newBand)  
  }

  @action cancelAddBand() {
    this.set('isAddingBand', false);
  }

}
