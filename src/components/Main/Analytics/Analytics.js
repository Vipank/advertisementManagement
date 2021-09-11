import { Button, Tooltip, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Kpi from "./Kpi/Kpi";

function Analytics() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classNames("flexColumn")}>
			<div className={classNames("makeFlex")}>
				<Typography variant="h1" style={{ flex: "1", fontSize: "24px", fontWeight: "600" }}>
					Analytics
					
				</Typography>
                <Tooltip title="Add" arrow>
						<Button>Arrow</Button>
					</Tooltip>
				<Grid container spacing={1} justifyContent="flex-end">
					<Grid item justifyContent="flex-end">
						<Button
							endIcon={<GetAppIcon color="primary" />}
							style={{ borderRadius: "24px" }}
							variant="contained"
							color="secondary"
						>
							Reports
						</Button>
					</Grid>
					<Grid item>
						<Button
							endIcon={<ExpandMoreIcon color="primary" />}
							style={{ borderRadius: "24px" }}
							variant="contained"
							color="secondary"
							onClick={handleClick}
						>
							<b>Last One Month</b>
						</Button>
					</Grid>
				</Grid>
			</div>

			<Typography style={{ fontSize: "16px", color: "#464646" }}>
				View detailed anylytics by upgrading to Gold membership
			</Typography>

			<Grid style={{ marginTop: "10px" }} container spacing={2} justifyContent="flex-end">
				<Grid item xs={3} justifyContent="flex-end">
					<Kpi text={"Impressions"} value={"16.9M"} />
				</Grid>
				<Grid item xs={3} justifyContent="flex-end">
					<Kpi text={"Clicks"} value={"10K"} />
				</Grid>
				<Grid item xs={3} justifyContent="flex-end">
					<Kpi text={"Conversion"} value={"26"} />
				</Grid>
				<Grid item xs={3} justifyContent="flex-end">
					<Kpi text={"Revenue"} value={"10.5M"} />
				</Grid>
			</Grid>
		</div>
	);
}

export default Analytics;
