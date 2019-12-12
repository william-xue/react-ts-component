import { CSSProperties } from "react";

declare global {
	interface IStyledProps {
		className?: string;
		style?: CSSProperties;
	}
}
