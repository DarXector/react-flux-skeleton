var React = require('react');
var List = require('./List.jsx');
var HTTP = require('../../services/HttpService');

var ListManager = React.createClass({

    getInitialState: function() {
        return {
            [this.props.type]: [],
            newItemText: ''
        }
    },

    componentWillMount: function(){
        HTTP.get('/'+this.props.type)
            .then(function(data){
                this.setState({[this.props.type]: data});
            }.bind(this));
    },

    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(element) {
        element.preventDefault();

        var currentItems = this.state[this.props.type];
        currentItems.push(this.state.newItemText);

        this.setState({
            [this.props.type]: currentItems,
            newItemText: ''
        });
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
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
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