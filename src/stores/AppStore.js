import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

// Esta store esta escuchando las actions que se puedan lanzar
class AppStore extends Reflux.Store {
   constructor() {
      super();
      this.listenables = Actions;
      this.state = {
         data: []
      }
   }

   getUsers = () =>  {
      HTTP.get('https://reqres.in/api/users?page=2')
      .then((response) => {
         this.setState({ data: response.data });
      });
   }
}

export default AppStore;