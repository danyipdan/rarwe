import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';
import Song from '../../../models/song';

export default class SongsController extends Controller {
  isAddingSong = false;
  newSongTitle = '';

  @empty('newSongTitle') isAddButtonDisabled;

  @action updateSongTitle(e) {
    console.log(this.newSongTitle);
    this.set('newSongTitle', e.target.value);
  }
  @action addSong() {
    this.set('isAddingSong', true);
  }

  @action saveSong(e) {
    e.preventDefault();
    console.log('saveSong()', this.newSongTitle);
    let newSong = Song.create({ title: this.newSongTitle });
    this.model.songs.pushObject(newSong);
    this.set('newSongTitle', '');
  }

  @action cancelAddSong() {
    this.set('isAddingSong', false);
  }

  @action updateRating(params){
    const {item: song, rating} = params
    song.set('rating', rating)
  }
}
