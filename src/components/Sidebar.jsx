import { Button, Drawer } from "@mui/material";
import { Link } from "react-router-dom";


export default function Sidebar({isOpen, toggleSidebar, navItems}){
    return (
        <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => toggleSidebar(false)}
        >
            
            {navItems.map((item) => {
                return <Link 
                to={item[1]} 
                style={{textDecoration:"none",width:"100%"}}>

                    <Button
                    sx={{
                        width:"100%",
                        color:"#d34a4a",
                        ":hover":{
                            backgroundColor:"#d34a4a20"
                        }
                    }}
                    onClick={() => toggleSidebar(false)}>
                        
                        {item[0]}
                        
                    </Button>

                </Link>
            })}

            <Button
            onClick={() => toggleSidebar(false)}
            sx={{
                color:"#d34a4a",
                ":hover":{
                    backgroundColor:"#d34a4a20"
                }
            }}>
                CLOSE
            </Button>

        </Drawer>
    )
}