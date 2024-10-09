import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <main className="container">
            <div class="centered-text">
                <Outlet />
            </div>
        </main>
    );
};

export default Layout;
