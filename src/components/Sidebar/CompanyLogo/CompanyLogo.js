import React, { Component } from "react";
import classNames from "classnames";
import styles from "./CompanyLogo.module.css";
import { Typography } from "@material-ui/core";
import { common } from "@material-ui/core/colors";
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';

export class CompanyLogo extends Component {
	render() {
		return (
			<div className={classNames("pd12", "LeftCenteredFlexColumn", styles.body)}>
				<div className={styles.logo} />
				<div className={classNames("LeftTopFlexColumn", "pd12", "pdt0", styles.companyName)}>
					MakeMyTrip
					<div className={classNames("centeredFlex", "pd12", "pdt0", styles.userType)}>
                    <StarsOutlinedIcon fontSize={"small"}/>
                        Platinum
                    </div>
				</div>
			</div>
		);
	}
}

export default CompanyLogo;
