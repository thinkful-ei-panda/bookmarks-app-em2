// // import './styles.css';

import store from './store.js';
import api from './api.js';
import bookmarksList from './bookmark-list.js';

// function to call event listeners and render
const main = function() {

  // fetching bookmarks from API
  // $('main').html(bookmarks.getBookmarks());

  // generate start page html
  // const homepage = bookmarks.generateHomePage();
  // console.log('homepage', homepage);
  // $('main').html(bookmarksList.generateHomePage());
  api.getBookmarksAPI()
    .then((bookmarks) => {
      bookmarks.forEach((bookmark) => store.addBookmarkToStore(bookmark));
      bookmarksList.renderBookmarks();
    });
  // store.addBookmarkToStore();
  // bookmarksList.renderBookmarks();

  // bind bookmark event listeners
  bookmarksList.bindEventListeners();

  // render function
  bookmarksList.renderBookmarks();

};

// call main function (jquery)
$(main);