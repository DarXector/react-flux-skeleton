var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({

    render: function(){

        var createItem = function(item){
            return <ListItem key={item.id} text={item.text} />
        };

        return ( <ul>{this.props.items.map(createItem)}</ul> );
    }
});

module.exports = List;