import EmberObject, { computed } from '@ember/object';
import { dasherize } from '@ember/string';

export default EmberObject.extend({
  name: '',

  init() {
    this._super(...arguments);
    if (!this.songs) {
      this.set('songs', []);
    }
  },

  slug: computed('name', function () {
    console.log('Recomputing slug for', this.name);
    return dasherize(this.name);
  }),
});
