var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField = mui.TextField;

var Company = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    render: function() {
        return (
            <div className="company">
                <h3 className="CompanySymbol">
                    {this.props.name}
                </h3>
                <p>{this.props.info}</p>
            </div>
        );
    }
});
module.exports = Company;