import * as React from "react";
import { SFC } from "react";
import cs from "classnames";

interface IProps extends IStyledProps {
	span?: number;
	offset?: number;
	gutter?: number;
}

const Col: SFC<IProps> = props => {
	const { span, offset, gutter, className, children } = props;
	const spanClass = `span${span}`;
	const offsetClass = `offset${offset}`;
	const paddingLeft = gutter ? `${gutter / 2}px` : undefined;
	const paddingRight = gutter ? `${gutter / 2}px` : undefined;
	const classNames = cs(componentName, spanClass, offsetClass);
	return (
		<div className={classNames} style={{ paddingLeft, paddingRight }}>
			<div className={className}>{children}</div>
		</div>
	);
};
const componentName = "z-col";
Col.defaultProps = {
	span: 1,
	offset: 0,
	gutter: 0
};
export default Col;
