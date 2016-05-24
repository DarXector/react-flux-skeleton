var Reflux = require('reflux');

var ListActions = Reflux.createActions([
    'getItems',
    'postItem'
]);

module.exports = ListActions;