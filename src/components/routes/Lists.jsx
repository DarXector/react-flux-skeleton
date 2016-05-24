var React = require('react');
var ListManager = require('../lists/ListManager.jsx');

var Lists = React.createClass({
    render: function(){
        return (
            <div className="row">
                <ListManager title="Ingredients" type="ingredients" store="IngredientsStore" />
                <ListManager title="ToDos" type="todos" headingColor="#FFA500" />
            </div>
        );
    }
});

module.exports = Lists;