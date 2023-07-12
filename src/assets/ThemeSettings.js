import { createTheme } from "@mui/material/styles"

export const siteColors = {
    primary: {
        main: "#11184A",
        light: "",
        subText: "#B1B5D2"
    },
    siteOrange: {
        main: "#FC6F22",
    },
    siteWhite: {
        main: "#FFFFFF"
    },
    siteBlack: {
        main: "#212121",
        light: "#5e6367",
        dark: "#000000",
        bold: "#292929",
        normal: "#252525",
    },
    siteGray: {
        main: "#9aa1a9",
        light: "#e8edef",
        normal: "#e0e0e0",
        bg: "#99999933",
    },
    otherColors: {
        borderLight: "#B1B5D2",
        borderSemiLight: "#F0F2FC",
        borderInput: "#E9E9E9",
        radioColor: "#B0B0B0",
        stepperDefaultLabel: "#F6CBB3",
        stepperBorder: "#F9E6DC",
    }
}

export const ThemeSettings = createTheme({
    palette: siteColors,
    mixins: {
        toolbar: { color: "white" },
        regularText: "sf-pro-display-regular",
        mediumText: "sf-pro-display-medium",
        boldText: "sf-pro-display-bold",
        flex: (align, justify) => {
            let obj = { display: "flex" }
            if (align) {
                obj["alignItems"] = align
            }
            if (justify) {
                obj["justifyContent"] = justify
            }
            return obj
        },
    },
})
