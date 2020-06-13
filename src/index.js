// // import './styles.css';

import store from '/src/store.js';
import api from '/src/api.js';
import bookmarks from '/src/bookmark-list.js';

// function to call event listeners and render
const main = function() {

  // fetching bookmarks from API
  // $('main').html(bookmarks.getBookmarks());

  // generate start page html
  // const homepage = bookmarks.generateHomePage();
  // console.log('homepage', homepage);
  $('body').html(bookmarks.generateHomePage());
  api.getBookmarksAPI()
    .then(bookmarks => {
      store.addBookmark();
      bookmarks.renderBookmarks();
    });

  // bind bookmark event listeners
  bookmarks.bindEventListeners();

  // render function
  bookmarks.renderBookmarks();

};

// call main function (jquery)
$(main);