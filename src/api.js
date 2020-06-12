// 'use strict';

import bookmarks from '/src/bookmarks-list.js';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/em';

// remember the bookmarksAPIFetch function !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function to fetch bookmarks (base url / bookmarks)
const getBookmarks = function(bookmark) {
  const newItem = JSON.stringify(bookmark);

  return fetch(`${BASE_URL}/bookmarks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
};



// function to create a new bookmark (needs title, url)
const createBookmark = function(bookmark) {
  const newItem = JSON.stringify(bookmark);

  return fetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};


// function to delete a bookmark
const deleteBookmark = function() {
  return fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'DELETE'
  });
};



// optional (if i do it, make sure to export it)
// function to update/edit a bookmark
// const editBookmark = function() {}


export default {
  // getBookmarks,
  createBookmark,
  deleteBookmark
};