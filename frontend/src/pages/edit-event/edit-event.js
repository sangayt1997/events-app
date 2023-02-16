import React from "react";
import EventForm from "../../components/event-form/event-form";
import { useRouteLoaderData } from "react-router-dom";

function EditEvent() {
    const data = useRouteLoaderData('event-detail');

    return (
        <EventForm event={data.event} method="patch" />
    );
}

export default EditEvent;
