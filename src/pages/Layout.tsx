// all the pages that need a nav bar on the top

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet /> {/*Layout children*/}
        </>
    )
}

export default Layout;