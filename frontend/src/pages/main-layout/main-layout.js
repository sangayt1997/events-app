import React, { useEffect } from "react";
import MainNavigation from "../../components/main-navigation/main-navigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../../util/auth";

function MainLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }
        if (token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log('TOKEN DURATION', tokenDuration);
        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' });
        }, tokenDuration);

    }, [token, submit]);
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default MainLayout;
