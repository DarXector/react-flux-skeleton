var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            newItemText: ''
        }
    },

    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(element) {
        element.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);

        this.setState({
            items: currentItems,
            newItemText: ''
        });
    },

    render: function(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form className={"input-group"} onSubmit={this.handleSubmit}>
                    <input className={"form-control"} onChange={this.onChange} value={this.state.newItemText} />
                    <button className={"btn btn-default"}>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        )
    }

});

module.exports = ListManager;