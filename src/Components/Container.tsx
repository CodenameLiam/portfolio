import React, { ReactElement } from "react";
import { Header } from "./Header";

interface IContainerProps {
	children?: ReactElement;
}

export const Container = (props: IContainerProps) => {
	return (
		<div className="Container">
			<Header />
			{props.children}
		</div>
	);
};
