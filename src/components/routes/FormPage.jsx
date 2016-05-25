var React = require('react');
var LeadCapture = require('../form/LeadCapture.jsx');

var FormPage = React.createClass({
    render: function(){
        return (
            <LeadCapture />
        );
    }
});

module.exports = FormPage;