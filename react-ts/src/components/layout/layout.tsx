import cs from "classnames";
import * as React from "react";
import { SFC } from "react";

interface IProps extends IStyledProps {
	dir?: "horizontal" | "vertical";
}

const Layout: SFC<IProps> = props => {
	const classNames = cs(componentName, props.dir, props.className);
	return (
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
};
Layout.defaultProps = {
	dir: "horizontal"
};
const componentName = "z-layout";
export default Layout;
