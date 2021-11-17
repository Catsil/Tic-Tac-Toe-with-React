import React, { useState } from "react";
import PropTypes from "prop-types";

const Box = props => {
	const [value, setValue] = useState("");

	return (
		<div
			className="square"
			onClick={() => {
				if (value == "" && props.finish == false) {
					setValue(props.value);
					props.continueGame(props.position);
				}
			}}>
			<span>{value}</span>
		</div>
	);
};

Box.propTypes = {
	value: PropTypes.string,
	continueGame: PropTypes.func,
	position: PropTypes.number,
	finish: PropTypes.bool
};

export default Box;
