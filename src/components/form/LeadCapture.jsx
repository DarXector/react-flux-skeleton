var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({

    onSubmit: function(e){
        if(!this.refs.fieldEmail.state.valid){
            alert("Invalid email or no email entered!")
        } else {
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                name: this.refs.fieldName.state.value
            }

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
        }
    },

    render: function(){
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName" />
                        <EmailField ref="fieldEmail" />
                        <button
                            className="btn btn-primary"
                            onClick={this.onSubmit} >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;