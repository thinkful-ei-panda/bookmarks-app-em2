// create an array to store bookmarks
const bookmarks = [];

// create variable for condensed view
// let condensedView = false;



// function to find bookmark by id (id arg)
const findById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};



// function to add a bookmark (title arg)
const addBookmark = function(bookmark) {
  this.bookmarks.push(bookmark);
};



// function to find and delete a bookmark (id)
const findAndDelete = function(id) {
  this.bookmarks = this.bookmarks.filter(currentBookmark => 
    currentBookmark.id !== id);
};



// function to show detailed view () (no args, use condensedView variable)
const showDetailedView = function(id) {
  this.bookmarks.expanded;
  // return expanded bookmark view function
};



// optional (remember to export to default)
// function to find and edit a bookmark (id, newData args)
// const findAndEdit = function() {}


export default {
  findById,
  addBookmark,
  findAndDelete,
  showDetailedView,
  bookmarks
};