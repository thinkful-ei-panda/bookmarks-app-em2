// create an array to store bookmarks
const bookmarks = [];
// create variable for adding bookmark
const adding = false;
// create variable error
const error = null;
// create variable for filter button
const filter = 1;
// create variable for condensed view
const isExpanded = { expand: false };


// function to find bookmark by id (id arg)
const findCurrentBookmarkById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};



// function to add a bookmark (title arg)
const addBookmarkToStore = function(userData) {
  // add expanded key-value 
  $.extend(userData, isExpanded);
  this.bookmarks.push(userData);
};
  // let expandedView = {
  //   expanded: false,
  // };
  // // push new bookmark to store
  // Object.assign(bookmark, expandedView);
  // this.bookmarks.push(bookmark);



// function to find and delete a bookmark (id)
const deleteBookmarkFromStore = function(id) {
  for (let i = 0; i < this.bookmarks.length; i++) {
    if (this.bookmarks[i].id === id) {
      this.bookmarks.splice(i, 1);
    }
  }
};

const setError = function(error) {
  this.error = error;
};



// function to show detailed view () (no args, use condensedView variable)
// const showDetailedView = function(id) {
//   // how to show the view has been expanded??

//   this.bookmarks.expanded === true;
//   // return expanded bookmark view function
// };



// optional (remember to export to default)
// function to find and edit a bookmark (id, newData args)
// const findAndEdit = function() {}


export default {
  findCurrentBookmarkById,
  addBookmarkToStore,
  deleteBookmarkFromStore,
  setError,
  bookmarks,
  adding,
  error,
  filter
};