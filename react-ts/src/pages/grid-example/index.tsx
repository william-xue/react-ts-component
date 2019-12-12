import * as React from "react";
import "./style.css";
import { Col, Row } from "../../components/grid/index";
function GridExample(props: any) {
	return (
		<div>
			<h1>栅格组件</h1>
			<h2>Flex布局</h2>
			<h3>基础栅格</h3>
			<Row className="row" justify="center">
				<Col className="col" span={12}>
					col-12
				</Col>
				<Col className="col" span={12}>
					col-12
				</Col>
			</Row>
			<Row className="row" justify="center">
				<Col className="col" span={8}>
					col-8
				</Col>
				<Col className="col" span={8}>
					col-8
				</Col>
				<Col className="col" span={8}>
					col-8
				</Col>
			</Row>
			<Row className="row" justify="center">
				<Col className="col" span={6}>
					col-6
				</Col>
				<Col className="col" span={6}>
					col-6
				</Col>
				<Col className="col" span={6}>
					col-6
				</Col>
				<Col className="col" span={6}>
					col-6
				</Col>
			</Row>
			<h3>左右偏移</h3>
			<Row className="row">
				<Col className="col" span={8} offset={8}>
					col-8 offset-8
				</Col>
				<Col className="col" span={8}>
					col-8
				</Col>
			</Row>
			<h3>水平排列</h3>
			<p>spaceAround</p>
			<Row className="row" justify="spaceAround">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<p>spaceBetween</p>
			<Row className="row" justify="spaceBetween">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<p>center</p>
			<Row className="row" justify="center">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<p>left</p>
			<Row className="row" justify="left">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<p>right</p>
			<Row className="row" justify="right">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<h3>垂直排列</h3>
			<p>top</p>
			<Row className="row" justify="center">
				<Col className="col1" span={6}>
					height=40
				</Col>
				<Col className="col2" span={6}>
					height=80
				</Col>
				<Col className="col3" span={6}>
					height=100
				</Col>
			</Row>
			<p>bottom</p>
			<Row className="row" justify="center" align="bottom">
				<Col className="col1" span={6}>
					height=40
				</Col>
				<Col className="col2" span={6}>
					height=80
				</Col>
				<Col className="col3" span={6}>
					height=100
				</Col>
			</Row>
			<p>middle</p>
			<Row className="row" justify="center" align="middle">
				<Col className="col1" span={6}>
					height=40
				</Col>
				<Col className="col2" span={6}>
					height=80
				</Col>
				<Col className="col3" span={6}>
					height=100
				</Col>
			</Row>
			<h3>gutter</h3>
			<p>无gutter</p>
			<Row className="row" justify="spaceBetween">
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
			<p>有gutter</p>
			<Row className="row gutter-row" justify="spaceBetween" gutter={48}>
				<Col className="col" span={10}>
					col-10
				</Col>
				<Col className="col" span={10}>
					col-10
				</Col>
			</Row>
		</div>
	);
}
export default GridExample;
