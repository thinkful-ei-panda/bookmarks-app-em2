// 'use strict';

import bookmarksList from './bookmark-list.js';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/em';

// remember the bookmarksAPIFetch function !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const bookmarksListAPIFetch = function(...args) {
  let error;
  return fetch(...args)
    .then(response => {
      if (!response.ok) {
        error = {code: response.status};
      }
      return response.json();
    })
    .then(data => {
      if(error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};


// function to fetch bookmarks (base url / bookmarks)
const getBookmarksAPI = function() {
  return bookmarksListAPIFetch(`${BASE_URL}/bookmarks`);
  // .then(response => response.json());
};
//   {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//     .then(response => response.json());
// };



// function to create a new bookmark (needs title, url)
const createBookmarkAPI = function(bookmark) {
  const newItem = JSON.stringify(bookmark);

  return bookmarksListAPIFetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};


// function to delete a bookmark
const deleteBookmarkAPI = function(id) {
  return bookmarksListAPIFetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'DELETE'
  });
// .then(response => response.json());
};



// optional (if i do it, make sure to export it)
// function to update/edit a bookmark
// const editBookmark = function() {}


export default {
  getBookmarksAPI,
  createBookmarkAPI,
  deleteBookmarkAPI
};