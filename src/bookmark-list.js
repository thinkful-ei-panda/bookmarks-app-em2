import store from '/src/store.js';
import api from '/src/api.js';

// function to generate start page HTML
const generateHomePage = function() {
  console.log('generate function');
  return `<header>
  <h1>Em's Bookmark App</h1>
  </header>
<button class="js-add-bookmark">Add New Bookmark</button>
<select class="filter" name="filter">
  <option value="">Filter By Rating</option>
  <option value="5">5 Stars</option>
  <option value="4">4 Stars</option>
  <option value="3">3 Stars</option>
  <option value="2">2 Stars</option>
  <option value="1">1 Star</option>
</select>
<div>${generateBookmarkList()}
</div>`;
};


// function to get bookmark id from element (bookmark arg,
// bookmark const in store.js)
const getBookmarkIDFromElement = function(bookmark) {
  return $(bookmark)
    .closest('.js-item-element')
    .data('item-id');
};

// function that generates bookmark list
const generateBookmarkList = function() {
  const bookmarks = store.bookmarks.map(function (bookmark){
    return generateBookmark(bookmark);
  });
  console.log('bookmarks', bookmarks);
  return `<ul class="js-bookmark-list">
  ${bookmarks}
  </ul>`;
};

// function to generate new bookmark element (bookmark ar) 
// (add if statement for making sure title, url, desc and rating are filled out, do we need this 'req')
const generateBookmark = function(bookmark) {
  console.log(generateBookmark(), 'is making li');
  return `
  <li class="js-item-element" data-item-id="${bookmark.id}">
  ${bookmark.title}<span>${bookmark.rating}</span>
  </li>`;
};

// function to generate form html
const generateAddBookmarkForm = function() {
  return `
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
  </form>`;
};


// function to generate bookmarks string
const generateBookmarkString = function(bookmarkList) {
  const bookmarks = bookmarkList.map(bookmark => {
    $('body').html(generateBookmark(bookmark));
    return bookmarks.join('');
  });
};


// function to open form page when add new bookmark is clicked
const handleAddNewBookmarkClick = function() {
  $('.js-add-bookmark').click(event => {
    console.log('this was clicked');
    $('body').html(generateAddBookmarkForm());
    console.log(generateAddBookmarkForm(), 'lalala');
    $('body').html(renderBookmarks());
    console.log(renderBookmarks(), 'boooooo');
  });
};



// function to handle new bookmark submit
// api.createBookmark plus 2 promise and error catch
const handleNewBookmarkSubmit = function() {
  console.log('does this Submit');
  $('body').on('submit', '#js-bookmark-list-form', event => {
    event.preventDefault();
    console.log('submit event');
    let params = {};
    params.title = $('#title').val();
    params.url = $('#link').val();
    params.desc = $('#desc').val();
    params.rating = $('#rating').val();
    // document.getElementById('js-bookmark-list-form').reset();
    console.log(params);
    api.createBookmarkAPI(params)
      .then(response => response.json())
      .then(bookmarks => {
        // store.addBookmark(newBookmark);
        store.bookmarks.push(bookmarks);
        renderBookmarks();
      });
  });
};


// function to handle cancel button click
// const handleCancelButtonClicked = function() {}



// function to handle delete bookmark
// const handleDeleteBookmarkClicked = function() {}
// use getBookmarkIDFromElement()
// api.deleteItem plus 2 promises



// function to handle filtering bookmarks, use filter variable in store
// const handleFilterBookmarks = function() {}
// use getBookmarkIDFromElement()
// <select> element



// function to handle detailed view clicked
// const handleDetailedViewClicked = function() {}
// use getBookmarkIDFromElement()



// function to render bookmarks page
const renderBookmarks = function() {
  let bookmarks = [...store.bookmarks];
  console.log(bookmarks);
  const bookmarkListItemsString = generateBookmarkString(bookmarks);
  console.log(bookmarkListItemsString);
  $('body').html(bookmarkListItemsString);
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
  renderBookmarks,
  bindEventListeners,
  generateHomePage
};