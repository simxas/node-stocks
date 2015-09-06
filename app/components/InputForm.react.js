var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    $ = require('jquery'),
    FlatButton = mui.FlatButton,
    RaisedButton = mui.RaisedButton,
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField = mui.TextField;


ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var InputForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var symbol = this.refs.symbol.getValue();
        // var symbol = React.findDOMNode(this.refs.symbol).value.trim();

        if (!symbol) {
        return;
        }
        // TODO: send request to the server
        this.props.onSymbolSubmit(symbol);
        // React.findDOMNode(this.refs.symbol).value = '';
        this.refs.symbol.clearValue();

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
            <TextField className="textinput" floatingLabelText="Enter a company name, ex: Netflix" ref="symbol" />
            <RaisedButton type="submit" label="SEARCH" />
        </form>
        );
    }
});
module.exports = InputForm;
