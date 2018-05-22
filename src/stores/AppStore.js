import Reflux from 'reflux';
import Actions from '../actions/Actions';

// Esta store esta escuchando las actions que se puedan lanzar
class AppStore extends Reflux.Store {
   constructor() {
      super();
      this.listenables = Actions;
   }
}

export default AppStore;