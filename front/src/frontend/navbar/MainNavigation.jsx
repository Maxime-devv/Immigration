import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
const MainNavigation = () =>{
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};
export default MainNavigation;