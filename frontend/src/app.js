import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Events, { loader as eventsLoader } from "./pages/events/events";
import EventDetail, {
    loader as eventDetailLoader,
    action as deleteEventAction
} from "./pages/event-detail/event-detail";
import EditEvent from "./pages/edit-event/edit-event";
import NewEvent from "./pages/new-event/new-event";
import MainLayout from "./pages/main-layout/main-layout";
import MainEventsLayout from "./pages/main-events-layout/main-events-layout";
import Error from "./pages/error/error";
import { action as dynamicEventAction } from "./components/event-form/event-form";
import Newsletter, { action as newsletterAction } from "./pages/news-letter/news-letter";
import Authentication, { action as authAction} from "./pages/authentication/authentication";
import { action as logoutAction } from "./pages/logout/logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        id: 'root',
        loader: tokenLoader ,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'events',
                element: <MainEventsLayout/>,
                children: [
                    {
                        index: true,
                        element: <Events/>,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetail/>,
                                action: deleteEventAction
                            },
                            {
                                path: 'edit',
                                element: <EditEvent/>,
                                action: dynamicEventAction,
                                loader: checkAuthLoader
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEvent/>,
                        action: dynamicEventAction,
                        loader: checkAuthLoader
                    },
                ]
            },
            {
                path: 'auth',
                element: <Authentication />,
                action: authAction
            },
            {
                path: 'newsletter',
                element: <Newsletter />,
                action: newsletterAction,
            },
            {
                path: 'logout',
                action: logoutAction,
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
