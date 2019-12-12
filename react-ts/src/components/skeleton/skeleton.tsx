import * as React from "react";
import cs from "classnames";
export interface IProps extends IStyledProps {
	loading?: boolean;
	children?: React.ReactNode;
}

class Skeleton extends React.Component<IProps, {}> {
	static defaultProps: Partial<IProps> = {};
	renderSkeleton() {
		const { loading, children } = this.props;
		if (loading) {
			return (
				<div className="skeleton-wrapper">
					<header className="skeleton-header" />
					<div className="skeleton-body">
						<div className="skeleton-item" />
						<div className="skeleton-item" />
						<div className="skeleton-item" />
					</div>
				</div>
			);
		}
		return children;
	}
	render() {
		return <div className={cs(componentName)}>{this.renderSkeleton()}</div>;
	}
}
const componentName = "z-skeleton";
export default Skeleton;
