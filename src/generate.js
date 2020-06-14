import store from './store.js';


// function to generate start page HTML
const homePage = function(bookmarkListHTML) {
  // console.log('generate function');
  let homepageHTML = `<header>
  <h1>My Bookmarks App</h1>
  <p>All My Favorite Websites Bookmarked Here!</p>
  </header>
<button class="js-add-bookmark">Add New Bookmark</button>
<select id="js-filter" name="filter">
  <option value="">Filter By Rating</option>
  <option value="5">5 Stars</option>
  <option value="4">4 Stars</option>
  <option value="3">3 Stars</option>
  <option value="2">2 Stars</option>
  <option value="1">1 Star</option>
</select>
<div>
  <ul>
  ${bookmarkListHTML}
  </ul>
</div>`;
  return homepageHTML;
};

// function that generates bookmark list IF STATEMENT
// const bookmarkList = function() {
//   const bookmarks = store.bookmarks.map(function (bookmark){
//     return generateBookmark(bookmark);
//   });
//   console.log('bookmarks', bookmarks);
//   return `<ul class="js-bookmark-list">
//   ${bookmarks}
//   </ul>`;
// };

// function to generate new bookmark element (bookmark ar) 
// (add if statement for making sure title, url, desc and rating are filled out, do we need this 'req')
const generateBookmark = function() {
  let bookmarkListHTML = ``;
  for (let i = 0; i < store.bookmarks.length; i++) {
    let expandHTML = ``;
    if (store.bookmarks[i].expand) {
      expandHTML = `<div>
    <div><p>${store.bookmarks[i].desc}</p></div>
    <div>
    <a href="${store.bookmarks[i].url}">Visit Site</a>
    </div>
    <div>
    <button class="js-delete">Delete</button>
    </div>
      </div>`;
    }
    if (store.bookmarks[i].rating >= store.filter) {
      bookmarkListHTML += `<li class="js-item-element" data-item-id="${store.bookmarks[i].id}">
  ${store.bookmarks[i].title}<span>${store.bookmarks[i].rating}</span>
  ${expandHTML}</li>`;
    } else {
      bookmarkListHTML += ``;
    }
  }
  return homePage(bookmarkListHTML);
};

// function to generate form html
const addBookmarkForm = function() {
  let errorHTML = ``;
  if(store.error) {
    errorHTML = `${store.error}`;
  }
  const formHTML = `
  <form id="js-bookmark-list-form">
    <label for="title">Add Bookmark Title:</label>
    <input type="text" name="title" placeholder="ie. Google" id="title" required>
    <label for="website">Website URL:</label>
    <input type="link" name="url" placeholder="https://www.google.com/" id="link" required>
    <select id="rating" name="rating" required>
      <option value="">Please Select A Rating</option>
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
      <option value="3">3 Stars</option>
      <option value="2">2 Stars</option>
      <option value="1">1 Star</option>
    </select>
    <label for="descript">Write Description Here:</label>
    <input type="text" name="desc" placeholder="Add Description Here" id="desc" required>
    ${errorHTML}
    <button class="js-submit" type="submit">Create</button>
    <button class="js-cancel" type="cancel">Cancel</button>
  </form>`;
  return formHTML;
};


// function to generate bookmarks string
// const bookmarkString = function(bookmarkList) {
//   const bookmarks = bookmarkList.map(bookmark => {
//     $('body').html(generateBookmark(bookmark));
//     return bookmarks.join('');
//   });
// };

export default {
  homePage,
  // bookmarkList,
  generateBookmark,
  addBookmarkForm,
  // bookmarkString
};