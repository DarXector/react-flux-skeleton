var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var CreateHashHistory = require('history').createHashHistory;

var History = new CreateHashHistory({
   queryKey: false
});

var BasePage = require('./components/routes/BasePage.jsx');
var HomePage = require('./components/routes/HomePage.jsx');
var ProductPage = require('./components/routes/ProductPage.jsx');
var ListsPage = require('./components/routes/ListsPage.jsx');

var Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/lists" component={ListsPage} />
        </Route>
    </Router>
);

module.exports = Routes;