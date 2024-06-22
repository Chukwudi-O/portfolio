import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar1({navItems, title}){
    let [isOpen, toggleSidebar] = useState(false)
    let primary = "#d34a4a"
    let hover = "#F25252"

    return (
        <Box 
        component="nav"
        display="flex"
        justifyContent="space-between"
        py={4.5} px={6}>

            <Link to="/portfolio/" style={{textDecoration: "none"}}>

                <Typography
                component="h1"
                variant="h4"
                align="start"
                color={primary}
                sx={{
                    transition: "200ms",
                    ":hover": {
                        translate: "1rem 0"
                    }
                    }}>

                    {title}
                    
                </Typography>

            </Link>
            
            
                <Box
                component="div"
                onClick={() => toggleSidebar(!isOpen)}
                sx={{
                    backgroundColor: primary,
                    width:"50px",
                    height:"40px",
                    transition:"200ms",
                    position: "fixed",
                    right: "5%",
                    top: "6%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-evenly",
                    alignItems:"center",

                    "::before":{
                        content:`"_"`,
                        color:"transparent",
                        width:"104%",
                        height:"8px",
                        transition:"200ms",
                        backgroundColor: "#16161d"
                    },

                    "::after":{
                        content:`"_"`,
                        color:"transparent",
                        width:"104%",
                        height:"8px",
                        transition:"200ms",
                        backgroundColor: "#16161d"
                    },

                    ":hover":{
                        backgroundColor: hover,
                        scale:"1.1",
                    }
                }}>
                    
                </Box>

            <Sidebar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            navItems={navItems}/>

        </Box>
    );
}