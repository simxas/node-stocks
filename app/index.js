var React = require('react'),
    ContentComponent = require('./components/ContentComponent.react');

React.render(<ContentComponent url="Api/v2/Lookup/json" />, document.getElementById('app'));