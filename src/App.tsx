
import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { appTheme } from "./themes/theme";
function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
    </ThemeProvider>
  );
}
export default App;