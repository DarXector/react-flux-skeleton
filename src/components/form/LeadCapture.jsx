var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var EmailActions = require('../../reflux/EmailActions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({

    mixins:[Reflux.listenTo(EmailStore, 'onChange')],

    getInitialState: function(){
        return {
            submitted: false
        }
    },

    onSubmit: function(e){

        this.setState({
            submitted: false
        });

        if(!this.refs.fieldEmail.state.valid){
            alert("Invalid email or no email entered!")
        } else {
            var subscriber = {
                email: this.refs.fieldEmail.state.value,
                name: this.refs.fieldName.state.value
            };

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();

            EmailActions.submitEmail(subscriber);
        }
    },

    onChange: function(msg){
        if(msg === 'Email submitted!'){
            this.setState({
                submitted: true
            });
        }
    },

    render: function(){

        var successStyle = {
            color: "green",
            visibility: this.state.submitted? 'visible' : 'hidden'
        };

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Get Something Free</div>
                <div className="panel-body">
                    <NameField type="First" ref="fieldName" />
                    <EmailField ref="fieldEmail" />
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
                        </div>
                        <div className="col-sm-2">

                            <h5 style={successStyle}>Success</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;