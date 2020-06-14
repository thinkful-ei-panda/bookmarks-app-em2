import store from '/src/store.js';
import api from '/src/api.js';
import generate from '/src/generate.js';

// function to get bookmark id from element (bookmark arg,
// bookmark const in store.js)
const getBookmarkIDFromElement = function(bookmark) {
  // console.log(bookmark)
  return $(bookmark)
    .closest('li')
    .data('item-id');
};





// function to open form page when add new bookmark is clicked
const handleAddNewBookmarkClick = function() {
  $('body').on('click', '.js-add-bookmark', event => {
    event.preventDefault();
    // console.log('this was clicked');
    store.adding = !store.adding;
    // $('body').html(generate.addBookmarkForm());
    // console.log(generate.addBookmarkForm(), 'lalala');
    renderBookmarks();
    // console.log(renderBookmarks(), 'boooooo');
  });
};



// function to handle new bookmark submit
// api.createBookmark plus 2 promise and error catch
const handleNewBookmarkSubmit = function() {
  // console.log('does this Submit');
  $('body').on('submit', '#js-bookmark-list-form', event => {
    event.preventDefault();
    // console.log('submit event');
    let params = {};
    params.title = $('#title').val();
    params.url = $('#link').val();
    params.desc = $('#desc').val();
    params.rating = $('#rating').val();
    // document.getElementById('js-bookmark-list-form').reset();
    // console.log(params);
    api.createBookmarkAPI(params)
      // .then(response => response.json())
      .then(bookmarks => {
        store.addBookmarkToStore(bookmarks);
        // store.bookmarks.push(bookmarks);
        // console.log(bookmarks);
        store.adding = !store.adding;
        renderBookmarks();
      })
      .catch((error) => {
        store.setError(error.message);
        renderBookmarks();
      });
  });
};


// function to handle cancel button click
const handleCancelButtonClicked = function() {
  $('body').on('click', '.js-cancel', event => {
    event.preventDefault();
    console.log('this was clicked');
    store.adding = !store.adding;
    // $('body').html(generate.addBookmarkForm());
    // console.log(generate.addBookmarkForm(), 'lalala');
    renderBookmarks();
    // console.log(renderBookmarks(), 'boooooo');
  });
};




// function to handle delete bookmark
const handleDeleteBookmarkClicked = function() {
  $('body').on('click', '.js-delete', event => {
    event.preventDefault();
    console.log('this will delete');
    const bookmarkID = getBookmarkIDFromElement(event.currentTarget);
    console.log(bookmarkID);
    api.deleteBookmarkAPI(bookmarkID)
      .then(() => {
        store.deleteBookmarkFromStore(bookmarkID);
        renderBookmarks();
      })
      .catch((error) => {
        store.setError(error.message);
        renderBookmarks();
      });
  });
};
// use getBookmarkIDFromElement()
// splice
// api.deleteItem plus 2 promises



// function to handle filtering bookmarks, use filter variable in store
const handleFilterBookmarks = function() {
  $('body').on('change', '#js-filter', event => {
    console.log('filter works');
    store.filter = $('option:selected').val();
    console.log(store.filter);
    renderBookmarks();
  });
};
// <select> element



// function to handle detailed view clicked
const handleDetailedViewClicked = function() {
  $('body').on('click', '.js-item-element', event => {
    console.log('detailed view');
    const bookmarkID = getBookmarkIDFromElement(event.currentTarget);
    console.log(bookmarkID)
    const currentBookmark = store.findCurrentBookmarkById(bookmarkID);
    console.log(currentBookmark)
    currentBookmark.expand = !currentBookmark.expand;
    renderBookmarks();
  });
};
// use getBookmarkIDFromElement()



// function to render bookmarks page
const renderBookmarks = function() {
  if (store.adding) {
    const bookmarkformHTML = generate.addBookmarkForm();
    $('body').html(bookmarkformHTML);
  } else {
    const bookmarkListItemsString = generate.generateBookmark();
    // console.log(bookmarkListItemsString);
    // console.log(store.bookmarks);
    $('body').html(bookmarkListItemsString);
  }
};



// optional (remember to add to bottom)
// function to handle edit bookmark
// const handleEditBookmarkSubmit = function() {}
// api.updateItem plus 1 promise



// function to run all event listeners/handlers
const bindEventListeners = function() {
  handleAddNewBookmarkClick();
  handleNewBookmarkSubmit();
  handleCancelButtonClicked();
  handleDeleteBookmarkClicked();
  handleFilterBookmarks();
  handleDetailedViewClicked();
};

export default {
  renderBookmarks,
  bindEventListeners,
};