import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import classNames from "classnames";
import React from "react";
import styles from "./Campaigns.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Brightness1Icon from '@material-ui/icons/Brightness1';

function Campaigns() {
	const campList = [
		{name: "Campaign December", status : "ACTIVE"},
		{name: "Diwadiv Bonus", status : "PAUSED"},
		{name: "Sunday Funday", status : "PAUSED"},
		{name: "Diwadiv Bonus", status : "ACTIVE"},
		{name: "Diwadiv Bonus", status : "ACTIVE"},
		{name: "Sunday Funday", status : "PAUSED"},
		{name: "Diwadiv Bonus", status : "ACTIVE"},
		{name: "Diwadiv Bonus", status : "ACTIVE"},

	];
	return (
		<div
			className={classNames("flexColumn")}
			style={{ backgroundColor: "#2C3668", marginTop: "5px", borderRadius: "12px" }}
		>
			<div className={classNames("pd12", "sbFlex")}>
				<div className={classNames(styles.campaigns)}>Campaigns</div>
			</div>
			<div className={classNames(styles.cmpLstCont)}>
				{campList.map((camp,index) => {
					return (
						<div key={index} className={classNames(styles.campaignItem, "makeFlex")} style={{ justifyContent: "flex-start" }}>
							<div style={{ flex: "1" }} className={classNames("LeftCenteredFlexColumn")}>
								{camp.name}
							</div>
							<Brightness1Icon  style={{fontSize:"10px"}} color={camp.status == "ACTIVE" ? "secondary" : "error"} />
						</div>
					);
				})}
			</div>
			<div className={classNames("pd12", "sbFlex", styles.archivedCont)}>
				<div className={classNames(styles.campaigns)}>View Archived Campaigns</div>
				<ArrowRightIcon style={{ color: "white" }} />
			</div>
		</div>
	);
}

export default Campaigns;
