var React = require('react');
var HTTP = require('../services/httpservice');
var Currency = require ('./Currency.jsx');


var List = React.createClass({
	getInitialState: function() {
		return {currency: []};
	},
	componentWillMount: function () {
		HTTP.get().then(function (data) {
			this.setState({currency:data});

		}.bind(this));
	},
	render: function(){

				var varvar = this.state.currency.map(function (item) {
					return <Currency ccy={item.ccy} base_ccy={item.base_ccy} buy={item.buy} sale={item.sale} />;
				});

		return (<div>{varvar}</div>)
	}
});

module.exports = List;