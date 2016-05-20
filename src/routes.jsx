var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHashHistory = require('history').createHashHistory;

var History = new CreateHashHistory({
   queryKey: false
});

var Base = require('./components/routes/Base.jsx');
var Form = require('./components/routes/Form.jsx');
var Lists = require('./components/routes/Lists.jsx');

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/form" component={Form} />
            <Route path="/lists" component={Lists} />
        </Route>
    </Router>
);

module.exports = Routes;