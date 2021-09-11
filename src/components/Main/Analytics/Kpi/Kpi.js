import { Divider, Paper } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Chart from "react-apexcharts";

const style = {
	container: {
		display: "flex",
		flexDirection: "column",
		borderRadius: "16px",
		// width: "300px",
		height: "150px",
	},
};

const Graph = () => {
	const state = {
		options: {
			chart: {
				id: "basic-bar",
				toolbar: false,
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			grid: {
				show: false,
			},
			stroke: {
				show: true,
				curve: "smooth",
				lineCap: "butt",
				colors: undefined,
				width: 1,
				dashArray: 0,
			},
		},
		series: [
			{
				name: "series-1",
				data: [30, 40, 45, 50, 49, 60, 70, 91],
			},
		],
	};

	return (
		<Chart
			options={state.options}
			series={state.series}
			type="line"
			// width="500"
		/>
	);
};

function Kpi({ text, value }) {
	return (
		<Paper style={style.container}>
			<div style={{ height: "70px", padding: "18px", display: "flex", justifyContent: "space-between" }}>
				<div className={classNames("flexColumn")}>
					<div className={classNames("centeredFlex")}>{text}</div>
					<div className={classNames("centeredFlex")}>
						<h2>{value}</h2>
					</div>
				</div>
				<div className={classNames("centeredFlex")} style={{ padding: "8px" }}>
					{/* Up by 2% <TrendingUpIcon color={"secondary"} /> */}
					<Graph />
				</div>
			</div>
			<Divider />
			<div style={{ height: "30px", display: "flex", alignItems: "center",justifyContent:"flex-end", padding: "8px" }}>
				<Button endIcon={<ArrowForwardIcon color="primary" />} color="primary">
					<b>See all {text} ..</b>
				</Button>
			</div>
		</Paper>
	);
}

export default Kpi;
