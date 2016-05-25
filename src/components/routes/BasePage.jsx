var React = require('react');
var NavBar = require('../nav/NavBar.jsx');

var navLinks = [
    {
        title: "Home",
        href: "/"
    },{
        title: "Courses",
        href: "#"
    },{
        title: "Form",
        href: "/form"
    },{
        title: "Lists",
        href: "/lists"
    }
];

var BasePage = React.createClass({
    render: function(){
        return (
            <div>
                <NavBar bgColor="#fff"
                    titleColor="#3097d1"
                    navData={navLinks} />
                <div className="row">{this.props.children}</div>
            </div>
        );
    }
});

module.exports = BasePage;