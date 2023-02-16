import React from "react";
import classes from './page-content.module.css';

function PageContent({ title, children }) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;
