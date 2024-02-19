import "../styles/globals.css";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "../src/store";



let theme = createTheme({


  typography: {
    fontFamily: "inter",
    heading: {
      fontSize: "23px",
      fontWeight: "600",
    },
  },
});

let theme1 = responsiveFontSizes(theme);

theme1.typography.heading = {
  fontSize: "23px",
  fontWeight: "600",
  fontFamily: "inter",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    fontWeight: "500",
  },


};



function MyApp({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme1}>
        <Component {...pageProps} />
        <ToastContainer/>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
