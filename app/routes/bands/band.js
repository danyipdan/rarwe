import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    let bands = this.modelFor('bands');
    const band = bands.findBy('slug', params.slug);
    console.log(band);
    return band;
  }
}
