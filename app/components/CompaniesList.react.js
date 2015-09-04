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
            console.log(company);
            switch(company.selectedOption) {
                case 'Company Symbol':
                return (
                    <Company name={company.Name} info={company.Symbol} infoName={company.selectedOption}>
                    </Company>
                );
                break;
                case 'Last Price':
                return (
                    <Company name={company.Name} info={company.LastPrice} infoName={company.selectedOption}>
                    </Company>
                );
                break;
                case 'Change of the Price':
                return (
                    <Company name={company.Name} info={company.Change} infoName={company.selectedOption}>
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