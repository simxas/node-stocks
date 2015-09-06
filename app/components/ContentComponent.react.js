var React = require('react'),
    CompaniesList = require("./CompaniesList.react"),
    InputForm = require("./InputForm.react"),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    $ = require('jquery'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardText = mui.CardText,
    Avatar = mui.Avatar,
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField;

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var arrayOfSymbol = [];
var arrayOfData = [];
var ContentComponent = React.createClass({
    handleSymbolSubmit: function(symbol) {
        $.ajax({
            url: this.props.url+'?input='+symbol,
            dataType: 'json',
            data: symbol,
            success: function(data) {
                var that = this;
                for (var key in data) {
                    arrayOfSymbol.push(data[key].Symbol);
                    $.getJSON('Api/v2/Quote/json', {symbol: data[key].Symbol}, function (quote) {
                        arrayOfData.push(quote);
                        that.setState({data: arrayOfData});
                    });
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
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
        // console.log(this.state.data);
        return (
            <Card>
                <CardHeader
                title="STOCKS"
                subtitle="Get all the information related to the stocks."
                avatar="http://lorempixel.com/100/100/technics/10/cc"/>

                    <p></p>
                    <InputForm onSymbolSubmit={this.handleSymbolSubmit} />
                    <p></p>

                <Card className="result">
                    <div className="result">
                        <h2>Information:</h2>
                        <CompaniesList data={this.state.data} />
                    </div>
                </Card>
            </Card>
        );
    }
});
module.exports = ContentComponent;