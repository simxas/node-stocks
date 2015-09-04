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
        var selected = '';
        var companiesNodes = this.props.data.map(function (company) {
            switch(company) {
                case 'Symbol':
                selected = company;
                break;
                case 'LastPrice':
                selected = company;
                break;
                case 'Change':
                selected = company;
                break;
            }
            switch(selected) {
                case 'Symbol':
                return (
                    <Company name={company.Name} info={company.Symbol} infoName={'Symbol'}>
                    </Company>
                );
                break;
                case 'LastPrice':
                return (
                    <Company name={company.Name} info={company.LastPrice} infoName={'Last Price'}>
                    </Company>
                );
                break;
                case 'Change':
                return (
                    <Company name={company.Name} info={company.Change} infoName={'Change'}>
                    </Company>
                );
                break;
            }


        });

        return (
            <div className="companyList">
                {companiesNodes}
            </div>
        );
    }
});
module.exports = CompaniesList;