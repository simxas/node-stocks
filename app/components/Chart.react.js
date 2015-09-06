var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    $ = require('jquery'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardText = mui.CardText,
    Paper = mui.Paper,
    Avatar = mui.Avatar,
    FlatButton = mui.FlatButton,
    RaisedButton = mui.RaisedButton,
    Slider = mui.Slider,
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField;

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var Chart = React.createClass({
    handleClick: function(i) {
        var daysForChart = this.refs.daysForChart.getValue();
        // console.log('You clicked: ' + i + 'value of slider is: '+daysForChart);
        window.Markit.InteractiveChartApi(this.props.symbol, daysForChart);
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
        var id = window.container = this.props.symbol;
        return (
            <Card className="chart">
                <div className="chartOptions">
                    <TextField className="numberinput" hintText="Enter number of days to show history of stocks on chart" multiLine={true} ref="daysForChart" />
                    <RaisedButton label="Show chart" onClick={this.handleClick.bind(this, this.props.symbol)} />
                </div>
                <div id={id} className="containers">
                </div>
            </Card>
        );
    }
});
module.exports = Chart;