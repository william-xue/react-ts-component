import * as React from "react";
import { IProps } from "./progress";
import cs from "classnames";
import { Circle as RCCircle } from "rc-progress";
interface CircleProps extends IProps {
	children: React.ReactNode;
}

const Circle: React.SFC<CircleProps> = props => {
	const {
		strokeWidth,
		circleWidth,
		children,
		percent,
		backgroundColor
	} = props;
	console.log(children);
	const circleStyle = {
		width: circleWidth,
		height: circleWidth
	};
	return (
		<div className={cs("z-circle")} style={circleStyle}>
			<RCCircle
				strokeWidth={strokeWidth}
				percent={percent}
				trailWidth={strokeWidth}
				strokeColor={backgroundColor}
				trailColor="#f5f5f5"
			/>
			{children}
		</div>
	);
};

export default Circle;
