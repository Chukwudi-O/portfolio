import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar1({navItems, title}){

    return (
        <Box 
        component="nav"
        display="flex"
        justifyContent="space-between"
        py={4.5} px={6}>

            <Link to="/" style={{textDecoration: "none"}}>

                <Typography
                component="h1"
                variant="h4"
                align="start"
                color="#F25252"
                sx={{
                    transition: "400ms",
                    ":hover": {
                        translate: "1rem 0"
                    }
                    }}>

                    {title}
                    
                </Typography>

            </Link>
            

            <Box
            display="flex"
            justifyContent="center"
            gap={2}
            >

                {navItems.map(item => { return(
                    <Link
                    to={item[1]}
                    style={{
                        textDecoration: "none"
                    }}>

                        <Button
                        variant="outlined"
                        sx={{
                            
                            ":hover": {
                                color:"#F2EBEB",
                                borderWidth:2,
                                borderColor: "transparent",
                                backgroundColor: "#F22222",
                            },
                            color: "#F25252",
                            borderWidth:2,
                            borderRadius: "1rem",
                            borderColor: "#F25252",
                            display: "flex",
                            flexWrap: "wrap",
                            transition: "500ms"
                        }}>

                            {item[0]}

                        </Button>

                    </Link>)})
                }

            </Box>

        </Box>
    );
}