import { Box } from "@mui/material";
import Navbar1 from "./Navbar1";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  let navItems = [["Home","/portfolio/"],["Web Dev","/portfolio/WebDev"]]
  return (
    <Box>

      <Navbar1 title="Portfolio" navItems={navItems}/>

      <Routes>

        <Route path="/portfolio/" element={<Home/>}/>

      </Routes>

    </Box>
  );
}

export default App;
