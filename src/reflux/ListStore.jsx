var Reflux = require('reflux');
var HTTP = require('../services/HttpService');
var ListActions = require('./ListActions.jsx');

var ListStore = Reflux.createStore({

    listenables: [ListActions],
    data:{},

    getItems: function(type){

        HTTP.get('/'+type)
            .then(function(json){
                this.data[type] = json;
                this.fireUpdate();
            }.bind(this));
    },

    postItem: function(type, text){

        console.log("postIngredient", text);

        if(!this.data[type]){
            this.data[type] = [];
        }

        var item = {
            "text": text,
            "id": Math.floor(Date.now() / 1000) + text
        };

        this.data[type].push(item);

        this.fireUpdate();

        HTTP.post('/'+type, item)
            .then(function(response){
                this.getItems(type);

            }.bind(this));
    },

    fireUpdate: function(){
        this.trigger('change', this.data);
    }
});

module.exports = ListStore;