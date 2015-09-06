var React = require('react'),
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

var Chart = React.createClass({
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
            <Card className="chart">
                <div id="content" style={{width:100+'%', height:400+'px'}}>
                <p>CHARTAS</p>
                </div>
            </Card>
        );
    }
});
module.exports = Chart;