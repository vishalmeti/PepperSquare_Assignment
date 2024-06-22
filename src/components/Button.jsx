import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ logo, label, onClick,className }) => {

const logoStyle = {
    marginRight: '10px',
};

return (
    <button className={className} onClick={onClick}>
        {logo && <img src={logo} alt="logo" style={logoStyle} />}
        {label}
    </button>
);
};

Button.propTypes = {
    logo: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className:PropTypes.string
};

Button.defaultProps = {
    logo: null,
    onClick: () => { },
    className:""
};

export default Button;
