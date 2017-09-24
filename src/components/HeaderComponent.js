import React from "react";
import PropTypes from "prop-types";
import "./css/HeaderComponent.css";
/**
 * Method renders header component
 * @param {Object} props
 * @param {string} props.header Header label
 * @public
 * @returns {Object} React element
 */
const HeaderComponent = props => <h1 className="header">{ props.header }</h1>;

HeaderComponent.propTypes = {
    header: PropTypes.string
};

export default HeaderComponent;
