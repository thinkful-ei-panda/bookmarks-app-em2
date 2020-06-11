import store from '/src/store.js';
import api from '/src/api.js';


// function to get bookmark id from element (bookmark arg,
// bookmark const in store.js)
const getBookmarkIDFromElement = function(bookmark) {
  return $(bookmark)
    .closest('.js-item-element')
    .data('item-id');
};



// function to generate new bookmark element (bookmark ar) 
// (add if statement for making sure title, url, desc and rating are filled out, do we need this 'req')
const generateNewBookmark = function(bookmark) {
  return `
  <li class="js-item-element" data-item-id="${bookmark.id}">
  ${bookmark.title}<span>${bookmark.rating}</span>
  </li>`;
};



// function to generate bookmarks string ??
const generateBookmarkString = function (bookmarkList) {
  const bookmarks = bookmarkList.map((bookmark) => 
    generateNewBookmark(bookmark));
  return bookmarks.join('');
};



// function to handle new bookmark submit
const handleNewBookmarkSubmit = function() {
  $('#js-bookmark-list-form').submit(event => {
    event.preventDefault();
    const newBookmarkTitle = $('#title').val('');
    const newBookmarkUrl = $('#link').val('');
    const newBookmarkDesc = $('#desc').val('');
    const newBookmarkRating = $('#rating').val('');
    api.createBookmark(newBookmarkTitle, newBookmarkUrl, 
      newBookmarkDesc, newBookmarkRating)
      .then((newBookmark) => {
        store.addBookmark(newBookmark);
        render();
        console.log(newBookmarkTitle);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
// api.createBookmark plus 2 promises



// function to handle delete bookmark
// const handleDeleteBookmarkClicked = function() {}
// api.deleteItem plus 2 promises



// function to handle filtering bookmarks
// const handleFilterBookmarks = function() {}
// <select> element



// function to handle detailed view clicked
// const handleDetailedViewClicked = function() {}



// function to render bookmarks page
const render = function() {
  let bookmarks = [...store.bookmarks];
  const bookmarkListItemsString = generateBookmarkString(bookmarks);
  $('.js-bookmark-list').html(bookmarkListItemsString);
};



// optional (remember to add to bottom)
// function to handle edit bookmark
// const handleEditBookmarkSubmit = function() {}
// api.updateItem plus 1 promise



// function to run all event listeners/handlers
const bindEventListeners = function() {
  getBookmarkIDFromElement,
  generateNewBookmark,
  generateBookmarkString,
  handleNewBookmarkSubmit
  // handleDeleteBookmarkClicked,
  // handleFilterBookmarks,
  // handleDetailedViewClicked
};

export default {
  render,
  bindEventListeners
};