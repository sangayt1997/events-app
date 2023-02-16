import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../../components/event-list/events-list";

function Events() {
    const data = useLoaderData();
    const events = data.events;

    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }

    return (
        <>
             <EventsList events={events} />
        </>
    );
}

export default Events;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.'}
        // throw new Response(
        //     JSON.stringify({ message: 'Could not fetch events.'}),
        //     { status: 500}
        // );
        return json(
            { message: 'Could not fetch events.' },
            { status: 500 }
            )
    } else {
        return response;
    }
}
