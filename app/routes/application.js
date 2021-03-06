import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({

  model() {
    return db.books();
  },

  actions: {
    addBook(book) {
      db.addBook(book);
      this.refresh();
    },
    removeBook(book) {
       db.removeBook(book);
       this.refresh();
     }
  }
  // Example 1
  // model( /* params */ ) {
  //   return retriveModel();
  // }

  // or like this way
  // model: function() {
  //   return retriveModel();
  // }


});
