import React from "react";
import EventForm from "../../components/event-form/event-form";

function NewEvent() {
    function submitHandler(event) {
        event.preventDefault();
    }

    return (
        <EventForm method="post" />
    );
}

export default NewEvent;

