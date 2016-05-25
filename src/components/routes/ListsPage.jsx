var React = require('react');
var ListManager = require('../lists/ListManager.jsx');

var ListsPage = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-sm-5">
                    <ListManager title="Ingredients" type="ingredients" store="IngredientsStore" />
                </div>
                <div className="col-sm-5">
                    <ListManager title="ToDos" type="todos" headingColor="#FFA500" />
                </div>
            </div>
        );
    }
});

module.exports = ListsPage;