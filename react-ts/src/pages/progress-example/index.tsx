import * as React from "react";
import { Progress } from "../../components/progress/index";
import { Button } from "../../components/button/index";
import "./style.css";
const PERCENT = 30;
interface IState {
	percent: number;
}
export default class ProgressExample extends React.Component<{}, IState> {
	state: IState = {
		percent: 10
	};
	increase = () => {
		let percent = this.state.percent + 10;
		if (percent > 100) {
			percent = 100;
		}
		this.setState({
			percent
		});
	};
	decrease = () => {
		let percent = this.state.percent - 10;
		if (percent < 0) {
			percent = 0;
		}
		this.setState({
			percent
		});
	};
	render() {
		return (
			<div>
				<h1>进度条组件</h1>
				<h2>长方形进度条</h2>
				<h3>基础用法</h3>
				<Progress strokeWidth={8} percent={PERCENT} className="line-progress">
					<span>{PERCENT}</span>
				</Progress>
				<Progress
					strokeWidth={8}
					percent={PERCENT}
					backgroundColor="#4ACBAC"
					className="line-progress"
				>
					<span>{PERCENT}</span>
				</Progress>
				<Progress
					strokeWidth={8}
					percent={this.state.percent}
					backgroundColor="#F3C040"
					className="line-progress"
				>
					<span>{this.state.percent}</span>
				</Progress>
				<div className="button-wrapper">
					<Button onClick={this.decrease}>减少10</Button>
					<Button onClick={this.increase}>增加10</Button>
				</div>
				<h2>圆形进度条</h2>
				<h3>基础用法</h3>
				<div className="circle-wrapper">
					<Progress
						strokeWidth={8}
						percent={PERCENT}
						type="circle"
						className="circle-progress"
						circleWidth="100px"
					>
						<span>{PERCENT}</span>
					</Progress>
					<Progress
						strokeWidth={8}
						percent={PERCENT}
						type="circle"
						className="circle-progress"
						backgroundColor="#4ACBAC"
						circleWidth="150px"
					>
						<span>{PERCENT}</span>
					</Progress>
					<Progress
						strokeWidth={8}
						percent={this.state.percent}
						backgroundColor="#F3C040"
						type="circle"
						className="circle-progress"
						circleWidth="150px"
					>
						<span>{this.state.percent}</span>
					</Progress>
					<div className="button-wrapper">
						<Button onClick={this.decrease}>减少10</Button>
						<Button onClick={this.increase}>增加10</Button>
					</div>
				</div>
			</div>
		);
	}
}
