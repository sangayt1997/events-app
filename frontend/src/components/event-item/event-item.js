import React from "react";
import classes from './event-item.module.css';
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

function EventItem({events}) {
    const token = useRouteLoaderData('root');
    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            submit(null, {method: 'delete'});
        }
    }

    return (
        <article className={classes.event}>
            <img src={events?.image} alt={events?.title}/>
            <h1>{events?.title}</h1>
            <time>{events?.date}</time>
            <p>{events?.description}</p>
            {token && (
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={startDeleteHandler}>Delete</button>
                </menu>
            )}
        </article>
    );
}

export default EventItem;
