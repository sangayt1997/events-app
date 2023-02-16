import React from "react";
import AuthForm from "../../components/auth-form/auth-form";
import { json, redirect } from "react-router-dom";

function Authentication() {
    return <AuthForm/>;
}

export default Authentication;

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Unsupported mode.'}, {status: 422});
    }
    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    };
    const response = fetch('http://localhost:8080/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData),
    });
    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({message: 'Could not authenticate user.'}, {status: 500});
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem('token', token);

    return redirect('/');
}
