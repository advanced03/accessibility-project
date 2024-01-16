import PropTypes from "prop-types";

const PortalButton = ({ title, iconClass, desc, onClick }) => (
    <div className="portal-button" onClick={onClick}>
        <div className="title">{title}</div>
        <div className={iconClass} />
        <div className="company-desc">{desc}</div>
    </div>
);

PortalButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PortalButton;
