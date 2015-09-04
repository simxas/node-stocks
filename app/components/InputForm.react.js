var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    FlatButton = mui.FlatButton,
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField = mui.TextField;


ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var InputForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var symbol = React.findDOMNode(this.refs.symbol).value.trim();
        //adding choice at the beginning of array
        var selectedOption = React.findDOMNode(this.refs.selectedOption).value.trim();
        if (!symbol) {
        return;
        }
        // TODO: send request to the server
        this.props.onSymbolSubmit(symbol, selectedOption);
        React.findDOMNode(this.refs.symbol).value = '';
        return;
    },
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
        <form className="inputForm" onSubmit={this.handleSubmit}>

            <select className="selectBox" name="optionsList" ref="selectedOption">
                <option value="disabled selected">Type of information to show</option>
                <option value="Symbol">Company Symbol</option>
                <option value="LastPrice">Last Price</option>
                <option value="Change">Change of the Price</option>
            </select>
            <input className="searchInput" type="text" placeholder="Enter a company name, ex: Netflix" ref="symbol" />
            <FlatButton type="submit" label="SEARCH" />
        </form>
        );
    }
});
module.exports = InputForm;
