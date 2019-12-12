import "./style.css";
import * as React from "react";
import Pagination from "../../components/pagination/index";

function PaginationExample(props: any) {
	const onClickPage = (page: number) => {
		console.log(`这是第${page}页`);
	};
	return (
		<div>
			<h1>分页组件</h1>
			<h2>基本用法</h2>
			<Pagination totalPage={5} onChange={onClickPage} />
			<h2>更多页码</h2>
			<span>todo</span>
		</div>
	);
}

export default PaginationExample;
