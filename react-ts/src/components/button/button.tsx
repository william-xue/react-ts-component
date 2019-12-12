import * as React from "react";
import cs from "classnames";
interface IProps extends IStyledProps {
	size?: "small" | "big";
	shape?: "rect" | "circle";
	color?: "default" | "danger" | "primary" | "success";
	type?: "button" | "submit" | "reset";
	href?: string;
	target?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.SFC<IProps> = props => {
	const {
		href,
		children,
		style,
		disabled,
		color,
		shape,
		className,
		size,
		onClick,
		target,
		type
	} = props;
	const onclick = (e: React.MouseEvent) => {
		if (disabled) {
			return e.preventDefault();
		}
		onClick && onClick.call(e.target, e);
	};
	const content =
		typeof children === "string" ? <span>{children}</span> : children;
	const button = href ? (
		<a
			href={href}
			style={style}
			className={cs(componentName, color, size, shape, className)}
			onClick={onclick}
			target={target}
		>
			{content}
		</a>
	) : (
		<button
			style={style}
			className={cs(componentName, color, shape, size, { disabled }, className)}
			disabled={disabled}
			onClick={onclick}
			type={type}
		>
			{content}
		</button>
	);
	return button;
};
Button.defaultProps = {
	size: "small",
	color: "default",
	shape: "rect",
	target: "_blank",
	type: "button"
};
const componentName = "z-button";
export default Button;
