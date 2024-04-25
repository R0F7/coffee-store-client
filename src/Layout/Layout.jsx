import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;