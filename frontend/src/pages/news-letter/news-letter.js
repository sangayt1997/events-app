import React from "react";
import PageContent from "../../components/page-content/page-content";
import NewsletterSignup from "../../components/new-letter-signup/new-letter-signup";

function Newsletter() {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsletterSignup />
        </PageContent>
    );
}

export default Newsletter;

export async function action({ request }) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
}
