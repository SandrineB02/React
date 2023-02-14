import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Root = () => {
    return (
        <>
            <Header/>
            <main id="app">
                <Outlet />
            </main>
        </>
    )
}

export default Root;