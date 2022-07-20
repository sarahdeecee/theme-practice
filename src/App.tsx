
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
​
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <></>
    </ThemeProvider>
  );
}
​
export default App;