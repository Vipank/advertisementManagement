import classNames from "classnames";
import React from "react";
import Campaigns from "./Campaigns/Campaigns";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import styles from "./Sidebar.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
function Sidebar() {
	const navItems = [
		{ name: "View Zones", icon: <LocationOnIcon /> },
		{ name: "Analytics", icon: <TrendingUpIcon /> },
		{ name: "Search Publishers", icon: <SearchIcon /> },
		{ name: "Account Settings", icon: <SettingsIcon /> },
		{ name: "Help", icon: <HelpOutlineIcon /> },
	];
	return (
		<div className={classNames(styles.bodycont)}>
			<CompanyLogo />
			<Campaigns />
			<div className={classNames("flexColumn")} style={{ marginTop: "8px" }}>
				{navItems.map((item, index) => {
					return (
						<div
							key={index}
							className={classNames("pd12", "makeFlex", styles.navItems)}
							style={{ justifyContent: "flex-start" }}
						>
							<RadioButtonCheckedIcon/>
							<div
								style={{ flex: "1", paddingLeft: "12px", color: "white" }}
								className={classNames("LeftCenteredFlexColumn")}
							>
								{item.name}
							</div>
							{item.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
