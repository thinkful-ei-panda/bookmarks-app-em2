// // import './styles.css';

import store from '/src/store.js';
import api from '/src/api.js';
import bookmarks from '/src/bookmarks-list.js';

// function to call event listeners and render
const main = function() {

  // fetching bookmarks from API
  // $('main').html(bookmarks.getBookmarks());

  // generate start page html
  $('main').html(bookmarks.generateStartPage());

  // bind bookmark event listeners
  bookmarks.bindEventListeners();

  // render function
  bookmarks.render();

};

// call main function (jquery)
$(main);