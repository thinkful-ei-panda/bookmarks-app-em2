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

// function to generate form html
const generateAddBookmarkForm = function() {
  return `<main>
  <h1>My Bookmarks</h1>
  <h2>Add New Bookmark</h2>
  <form id="js-bookmark-list-form">
    <label for="title">Bookmark Title</label>
    <input type="text" name="title" placeholder="ie. Google" id="title" required>
    <input type="link" name="url" placeholder="https://www.google.com/" id="link" required>
    <select id="rating" name="rating" required>
      <option value="">Select A Rating</option>
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
      <option value="3">3 Stars</option>
      <option value="2">2 Stars</option>
      <option value="1">1 Star</option>
    </select>
    <input type="text" name="desc" placeholder="Add Description Here" id="desc" required>
    <button type="submit">Create</button>
    <button type="cancel">Cancel</button>
  </form>
</main>`;
};


// function to generate bookmarks string
const generateBookmarkString = function (bookmarkList) {
  const bookmarks = bookmarkList.map((bookmark) => 
    generateNewBookmark(bookmark));
  return bookmarks.join('');
};


// function to open form page when add new bookmark is clicked
const handleAddNewBookmarkClick = function() {
  $('.js-add-bookmark').click(event => {
    generateAddBookmarkForm();
  });
};



// function to handle new bookmark submit
// api.createBookmark plus 1 promise and error catch
const handleNewBookmarkSubmit = function() {
  $('#js-bookmark-list-form').submit(event => {
    event.preventDefault();
    console.log('submit event');
    let params = {};
    params.title = $('#title').val();
    params.url = $('#link').val();
    params.desc = $('#desc').val();
    params.rating = $('#rating').val();

    api.createBookmark(params)
      .then(response => response.json())
      .then((newBookmark) => {
        store.addBookmark(newBookmark);
        render();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};


// function to handle cancel button click
// const handleCancelButtonClicked = function() {}



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
  console.log(bookmarks);
  const bookmarkListItemsString = generateBookmarkString(bookmarks);
  console.log(bookmarkListItemsString);
  $('.js-bookmark-list').html(bookmarkListItemsString);
};



// optional (remember to add to bottom)
// function to handle edit bookmark
// const handleEditBookmarkSubmit = function() {}
// api.updateItem plus 1 promise



// function to run all event listeners/handlers
const bindEventListeners = function() {
  handleAddNewBookmarkClick();
  handleNewBookmarkSubmit();
  // handleDeleteBookmarkClicked();
  // handleFilterBookmarks();
  // handleDetailedViewClicked();
};

export default {
  render,
  bindEventListeners
};