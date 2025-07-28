import PropTypes from "prop-types";

function ControlColor (props){
    const {nombreColor} = props;

    return (
        <div>
            <label>{nombreColor}</label>
            <input type="range" min="0" max="255" />
        </div>
    )
}

ControlColor.propTypes = {
    nombreColor: PropTypes.string.isRequired
}

export default ControlColor;