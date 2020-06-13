// create an array to store bookmarks
const bookmarks = [];
// create variable for adding bookmark
const adding = false;
// create variable error
const error = null;
// create variable for filter button
const filter = 0;
// create variable for condensed view



// function to find bookmark by id (id arg)
const findCurrentBookmarkById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};



// function to add a bookmark (title arg)
const addBookmarkToStore = function(userData) {
  // add expanded key-value 
  userData.forEach(bookmark => {
    bookmark['expand'] = false;
    this.bookmarks.push(bookmark);
  });
};
  // let expandedView = {
  //   expanded: false,
  // };
  // // push new bookmark to store
  // Object.assign(bookmark, expandedView);
  // this.bookmarks.push(bookmark);



// function to find and delete a bookmark (id)
const deleteBookmarkFromStore = function(id) {
  const targetBookmark = this.bookmarks.findIndex(currentBookmark => 
    currentBookmark === targetBookmark);
  this.bookmarks.splice(targetBookmark, 1);
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
  // showDetailedView,
  bookmarks,
  adding,
  error,
  filter
};