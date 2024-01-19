import { BootstrapIcons, MaterialIcons } from "./IconsSource"

import './App.css';
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">

      <Typography variant="body1" component="div" sx={{ color: "violet", fontWeight: "bold", textAlign: "left", fontSize: 30 }}>
        BootStrap Icons
      </Typography>
      <BootstrapIcons />
      <br /><br />
      <Typography variant="body1" component="div" sx={{ color: "blue", fontWeight: "bold", textAlign: "left", fontSize: 30 }}>
        BootStrap Icons
      </Typography>

      <MaterialIcons />
    </div>
  );
}

export default App;
