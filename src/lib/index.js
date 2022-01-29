import React from "react"
import PropTypes from "prop-types"
import "./style.css"

var propTypes = {
    strength: PropTypes.string,
    bars: PropTypes.string
};

var defaultProps = {
    strength: 'good',
    bars: 'five-bars'
};

const SignalView = ({ strength, bars }) => {
    return (
        <div className={"mobile-signal-bars signal-sizing-box " + strength + " " + bars}>
            <div className="first-bar signal-bar"></div>
            <div className="second-bar signal-bar"></div>
            <div className="third-bar signal-bar"></div>
            <div className="fourth-bar signal-bar"></div>
            <div className="fifth-bar signal-bar"></div>
        </div>
    )
}

SignalView.propTypes = propTypes;
SignalView.defaultProps = defaultProps;

export default SignalView;