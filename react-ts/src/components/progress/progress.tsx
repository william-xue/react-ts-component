import * as React from "react";
import cs from "classnames";
import Line from "./line";
import Circle from "./circle";
import validProgress from ".././utils/validProgress";
export interface IProps extends IStyledProps {
	percent?: number;
	size?: "default" | "small";
	type?: "line" | "circle";
	backgroundColor?: string;
	strokeWidth?: number;
	circleWidth?: string;
}

interface IState {}

class Progress extends React.Component<IProps, IState> {
	static defaultProps = {
		type: "line",
		percent: 0,
		size: "default",
		backgroundColor: "#03A0E9",
		circleWidth: "100px"
	};
	renderProgress() {
		const {
			className,
			type,
			strokeWidth,
			backgroundColor,
			percent,
			circleWidth
		} = this.props;
		if (type === "line") {
			return (
				<Line
					className={className}
					strokeWidth={strokeWidth}
					percent={validProgress(percent)}
					backgroundColor={backgroundColor}
				>
					{this.renderProgressInfo()}
				</Line>
			);
		} else if (type === "circle") {
			return (
				<Circle
					strokeWidth={strokeWidth}
					percent={validProgress(percent)}
					backgroundColor={backgroundColor}
					circleWidth={circleWidth}
				>
					{this.renderProgressInfo()}
				</Circle>
			);
		}
		return null;
	}
	renderProgressInfo = () => {
		const { percent } = this.props;
		return (
			<span className={cs("z-progress-info", "z-progress-circle-info")}>
				{validProgress(percent)}%
			</span>
		);
	};
	render() {
		const { className } = this.props;
		const classNames = cs(componentName, className);
		return <div className={classNames}>{this.renderProgress()}</div>;
	}
}
const componentName = "z-progress";
export default Progress;
