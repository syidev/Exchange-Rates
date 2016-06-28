var React = require ('react');

var Currency = React.createClass({
    render: function(){
        return (
            <div className="col-sm-3">
                <div className="row">
                    <h2>{this.props.ccy}/{this.props.base_ccy}</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Buy</h3>
                            <p>{this.props.buy}</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Sale</h3>
                            <p>{this.props.sale}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Currency;
