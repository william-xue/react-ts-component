import * as React from "react";
import cs from "classnames";

interface IProps extends IStyledProps {
	totalPage: number;
	onChange?: (name: number) => void;
}
interface IState {
	currentPage: number;
}
class Pagination extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { currentPage: 1 };
	}
	onClickPage = (currentPage: number) => {
		if (currentPage < 1) {
			this.setState({
				currentPage: 1
			});
		} else if (currentPage > this.props.totalPage) {
			this.setState({
				currentPage: this.props.totalPage
			});
		} else {
			this.setState({
				currentPage
			});
			this.props.onChange && this.props.onChange(currentPage);
		}
	};
	render() {
		const items: Array<any> = [];
		for (let i = 0; i < this.props.totalPage; i++) {
			items.push(
				<span
					onClick={this.onClickPage.bind(null, i + 1)}
					key={i}
					className={cs("item", { active: i + 1 === this.state.currentPage })}
				>
					{i + 1}
				</span>
			);
		}
		const classNames = cs(componentName);
		return (
			<div className={classNames}>
				<span
					className={cs("item", "z-prev", {
						disabled: this.state.currentPage - 1 < 1
					})}
					onClick={this.onClickPage.bind(null, this.state.currentPage - 1)}
				>
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-left" />
					</svg>
				</span>
				{items}
				<span
					className={cs("item", "z-next", {
						disabled: this.state.currentPage + 1 > this.props.totalPage
					})}
					onClick={this.onClickPage.bind(null, this.state.currentPage + 1)}
				>
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-right" />
					</svg>
				</span>
			</div>
		);
	}
}
const componentName = "z-pagination";
export default Pagination;
