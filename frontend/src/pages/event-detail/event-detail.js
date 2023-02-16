import React from "react";
import EventItem from "../../components/event-item/event-item";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

function EventDetail() {
    const data = useRouteLoaderData('event-detail');
    return (
        <EventItem events={data.event} />
    );
}

export default EventDetail;

export async function loader({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        return json(
            { message: 'Could not fetch details for selected event' },
            { status: 500 }
        );
    } else {
        return response;
    }
}

export async function action({params, request}) {
    const eventId = params.eventId;
    const token = getAuthToken();
    const response = fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event.' },
            { status: 500 }
        );
    }

    return redirect('/events');
}
