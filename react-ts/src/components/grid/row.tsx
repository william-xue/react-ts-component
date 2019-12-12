import * as React from "react";
import { SFC, ReactElement } from "react";
import cs from "classnames";
import upperFirstLetter from "../utils/upperFirstLetter";
import Col from "./col";
interface IProps extends IStyledProps {
	gutter?: number;
	justify?: "left" | "right" | "center" | "spaceBetween" | "spaceAround";
	align?: "top" | "bottom" | "middle";
}

const Row: SFC<IProps> = props => {
	const { justify, align, gutter, className } = props;
	const justifyClass = justify && `justify${upperFirstLetter(justify)}`;
	const alignClass =
		align && align !== "top" && `align${upperFirstLetter(align)}`;
	const margin = gutter ? `${-gutter / 2}px` : undefined;
	const classNames = cs(componentName, justifyClass, alignClass, className);

	const children = React.Children.map(props.children, (child, index) => {
		const element = child as ReactElement<any>;
		return (
			element.type === Col &&
			React.cloneElement(element, {
				gutter
			})
		);
	});
	const cols = children && children.filter(i => i);
	return (
		<div
			className={classNames}
			style={{ marginLeft: margin, marginRight: margin, ...props.style }}
		>
			{cols}
		</div>
	);
};
const componentName = "z-row";
Row.defaultProps = {
	gutter: 0,
	justify: "left",
	align: "top"
};
export default Row;
