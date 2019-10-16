import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
export default Route.extend({
  session: service(),
  firebaseApp: service(),
  actions: {

    async login() {
      const auth = await this.get('firebaseApp').auth();
      const provider = new firebase.auth.GoogleAuthProvider();
       return auth.signInWithPopup(provider).then ((result)=>{
         this.transitionTo('dashboard')

         return result
       }).catch(function(error){

       })
    }
  }
});
