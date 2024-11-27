import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: { main: "#387478" },
    secondary: { main: "#629584" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});
