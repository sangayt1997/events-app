import React from "react";
import MainNavigation from "../../components/main-navigation/main-navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
