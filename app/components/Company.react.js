var React = require('react'),
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
        if(this.props.name != undefined) {
            return (
                <Card>
                    <div className="company">
                        <p>Company name: <span className="infoLabel">{this.props.name}</span></p>
                        <p>{this.props.infoName}: <span className="infoLabel">{this.props.info}</span></p>
                    </div>
                </Card>
            );
        }else{
            return (
                <div style={{display: 'none'}}></div>
            );
        }

    }
});
module.exports = Company;