var React = require('react');
var List = require('./List.jsx');
var Reflux = require('reflux');
var ListItem = require('./ListItem.jsx');
var ListActions = require('../../reflux/ListActions.jsx');
var ListStore = require('../../reflux/ListStore.jsx');

var ListManager = React.createClass({

    mixins:[Reflux.listenTo(ListStore, 'onChange')],

    getInitialState: function() {
        return {
            newItemText: '',
            [this.props.type]: []
        }
    },

    componentWillMount: function(){
        ListActions.getItems(this.props.type);
    },

    onChange: function(event, data){
        this.setState({
            [this.props.type]: data[this.props.type]
        })
    },

    onInputChange: function(e){
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(event) {
        event.preventDefault();

        if(this.state.newItemText){
            ListActions.postItem(this.props.type, this.state.newItemText);
        }

        this.setState({newItemText: ''});
    },

    render: function(){

        var divStyle = {
            marginTop: 10
        };

        var headingStyle = {};

        if(this.props.headingColor){
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       onChange={this.onInputChange}
                                       value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state[this.props.type]} />
                </div>
            </div>
        )
    }

});

module.exports = ListManager;