
import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { ColorContext } from "./ColorContext";
import { SwitchModeButton } from "./components/SwitchModeButton";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { appTheme } from "./themes/theme";
function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <SwitchModeButton />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
export default App;