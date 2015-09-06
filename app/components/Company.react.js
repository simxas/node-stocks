var React = require('react'),
    Chart = require("./Chart.react"),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardText = mui.CardText,
    Avatar = mui.Avatar,
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
            <Card className="company">
                <div className="company">
                    <p>Company name: <span className="infoLabel">{this.props.name}</span></p>
                    <p>Company symbol: <span className="infoLabel">{this.props.symbol}</span></p>
                    <p>Last Price: <span className="infoLabel">{this.props.lastPrice}</span></p>
                    <p>Change of price: <span className="infoLabel">{this.props.change}</span></p>
                </div>
                <Chart symbol={this.props.symbol} />
            </Card>
        );
    }
});
module.exports = Company;