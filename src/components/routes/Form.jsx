var React = require('react');
var LeadCapture = require('../form/LeadCapture.jsx');

var Form = React.createClass({
    render: function(){
        return (
            <LeadCapture />
        );
    }
});

module.exports = Form;