import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		common: {
			black: "#000000",
			white: "#FFFFFF",
			grey: "#484848",
		},
		primary: {
			light: "#2C3668",
			main: "#111C56",
			dark: "#0D1644",
		},
		secondary: {
			main: "#79CDA5",
		},
        error : {
            main: "#f06262"
        },
        info : {
            main :"#5664D2"
        }
	},
	typography: {
		fontFamily: "Sen",
        button: {
            textTransform: 'none'
          }
	},
	props: {
		MuiSvgIcon: {
			htmlColor: "white",
		},
	},
});

export default theme;
