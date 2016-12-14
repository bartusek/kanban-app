import Alt from 'alt';
import makeFinalStore from 'alt-utils/lib/makeFinalStore';

class Flux extends Alt {
  constructor(config) {
    super(config);

    this.FinalStore = makeFinalStore(this);
  }
}

const flux = new Flux();

export default flux; //Webpack caches the modules so the next time you import Alt from somewhere, it will return the same instance again.
