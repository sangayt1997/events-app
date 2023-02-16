import React from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../../components/events-navigation/events-navigation";

function MainEventsLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}

export default MainEventsLayout;
