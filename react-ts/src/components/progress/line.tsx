import * as React from "react";
import { IProps } from "./progress";
import validProgress from "../utils/validProgress";
import cs from "classnames";
interface LineProps extends IProps {
	children?: React.ReactNode;
}

const Line: React.SFC<LineProps> = props => {
	const {
		percent,
		size,
		strokeWidth,
		backgroundColor,
		children,
		className,
		...rest
	} = props;
	const percentStyle = {
		width: `${validProgress(percent)}%`,
		height: strokeWidth || (size === "small" ? 6 : 8),
		background: backgroundColor,
		borderRadius: "100px"
	};

	return (
		<div className={cs("z-progress-container", className)}>
			<div className="z-progress-outer">
				<div
					className="z-progress-inner"
					style={{ borderRadius: percentStyle.borderRadius }}
				>
					<div
						style={percentStyle}
						{...rest}
						className={"z-progress-content"}
					/>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Line;
