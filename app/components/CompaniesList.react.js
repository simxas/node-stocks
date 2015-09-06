var React = require('react'),
    Company = require("./Company.react"),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField = mui.TextField;


ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var CompaniesList = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    render: function() {
        var companiesNodes = this.props.data.map(function (company) {

            return (
                <Company name={company.Name} symbol={company.Symbol} lastPrice={company.LastPrice} change={company.Change}>
                </Company>
            );

        });

        return (
            <div className="companyList">
                {companiesNodes}
            </div>
        );
    }
});
module.exports = CompaniesList;