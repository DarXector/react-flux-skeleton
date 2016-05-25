var Reflux = require('reflux');
var HTTP = require('../services/HttpService');
var EmailActions = require('./EmailActions.jsx');

var EmailStore = Reflux.createStore({
    listenables: [EmailActions],

    submitEmail: function(subscriber){
        HTTP.post('/subscribers', subscriber)
            .then(function(response){
                var msg = '';

                if (response.status === 200){
                    msg = 'Email submitted!';
                } else {
                    msg = 'Submission failed!';
                }

                this.trigger(msg);
            }.bind(this));
    }

});

module.exports = EmailStore;

