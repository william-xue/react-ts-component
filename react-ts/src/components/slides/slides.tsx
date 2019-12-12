import * as React from "react";
import cs from "classnames";
interface IProps extends IStyledProps {
	speed?: number;
	autoPlay?: Boolean;
	interval?: number;
}
interface IState {
	currentIndex: number;
	hasTransition: boolean;
}
const START_INDEX = 1;
class Slides extends React.Component<IProps, IState> {
	static defaultProps = {
		speed: 500,
		autoPlay: true,
		interval: 3000
	};
	constructor(props: IProps) {
		super(props);
		this.state = {
			currentIndex: START_INDEX,
			hasTransition: true
		};
	}
	private containerRef: HTMLDivElement;
	private timer: any;
	private length: number;
	private prevIndex: number = 1;

	componentDidMount() {
		this.cloneNode();
		this.setTransition(START_INDEX);
		if (this.props.autoPlay) {
			this.autoPlay();
		}
		this.containerRef.addEventListener(
			"transitionend",
			this.handleTransitionEnd
		);
	}
	componentWillUnmount() {
		clearTimeout(this.timer);
		this.containerRef.removeEventListener(
			"transitionend",
			this.handleTransitionEnd
		);
	}
	handleTransitionEnd = () => {
		const { currentIndex } = this.state;
		//从第一张到最后一张
		if (currentIndex === this.length && this.prevIndex === 1) {
			this.setState(
				{
					hasTransition: false
				},
				() => {
					this.goto(this.length);
				}
			);
		}
		//从最后一张到第一张
		if (this.prevIndex === this.length && currentIndex === 1) {
			this.setState(
				{
					hasTransition: false
				},
				() => {
					this.goto(1);
				}
			);
		}
	};
	setTransition(n: number) {
		if (this.state.hasTransition) {
			this.containerRef.style.transition = `transform ${this.props.speed}ms`;
		} else {
			this.containerRef.style.transition = "";
		}
		this.containerRef.style.transform = `translateX(${-100 * n}%)`;
	}
	autoPlay = () => {
		const { interval } = this.props;
		const play = () => {
			this.next();
			this.timer = setTimeout(() => {
				play();
			}, interval);
		};
		this.timer = setTimeout(() => {
			play();
		}, interval);
	};
	next = () => {
		const { currentIndex } = this.state;

		if (currentIndex < this.length) {
			this.goto(currentIndex + 1);
		} else {
			this.goto(1);
		}
	};
	prev = () => {
		const { currentIndex } = this.state;
		if (currentIndex > 1) {
			this.goto(currentIndex - 1);
		} else {
			this.goto(this.length);
		}
	};
	goto(n: number) {
		if (!this.state.hasTransition) {
			this.setState({
				hasTransition: true
			});
		}

		this.prevIndex = this.state.currentIndex;
		this.setState({
			currentIndex: n
		});
		if (n === this.length && this.prevIndex === 1) {
			this.setTransition(0);
			// last => first
		} else if (n === 1 && this.prevIndex === this.length) {
			this.setTransition(this.length + 1);

			// normal
		} else {
			this.setTransition(n);
		}
	}
	cloneNode = () => {
		const nodeList: HTMLElement[] = [];
		this.containerRef.childNodes.forEach(node => {
			if (node.nodeType === 1) {
				nodeList.push(node as HTMLElement);
				const node2 = node as HTMLElement;
				node2.style["flex-shrink"] = 0;
			}
		});
		this.length = nodeList.length;
		this.containerRef.append(nodeList[0].cloneNode(true));
		this.containerRef.prepend(nodeList[nodeList.length - 1].cloneNode(true));
	};
	handleMouseEnter: React.MouseEventHandler = () => {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	};
	handleMouseLeave: React.MouseEventHandler = () => {
		this.autoPlay();
	};
	render() {
		const { className, style, children } = this.props;
		const { currentIndex } = this.state;
		return (
			<div
				style={style}
				className={cs(componentName)}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<div
					className={cs("container", className)}
					ref={(node: HTMLDivElement) => {
						this.containerRef = node;
					}}
				>
					{children}
				</div>
				<div className={cs("z-dot")}>
					{React.Children.map(children, (child, index) => {
						return (
							<div
								className={cs("z-dot-item", {
									active: index + 1 === currentIndex
								})}
								onClick={() => this.goto(index + 1)}
							/>
						);
					})}
				</div>
				<div className="z-prev z-control" onClick={() => this.prev()}>
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-left" />
					</svg>
				</div>
				<div className="z-next z-control" onClick={() => this.next()}>
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-right" />
					</svg>
				</div>
			</div>
		);
	}
}

const componentName = "z-slides";
export default Slides;
