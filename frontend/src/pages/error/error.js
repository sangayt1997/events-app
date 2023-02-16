import React from "react";
import PageContent from "../../components/page-content/page-content";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../../components/main-navigation/main-navigation";

function Error() {
    const error = useRouteError();
    let title = 'An Error Occurred!';
    let message = 'Something went wrong.';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}

export default Error;
