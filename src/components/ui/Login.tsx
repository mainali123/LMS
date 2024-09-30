import React from "react";

import {inputForm} from "../micro_componenets/Form";

function LoginPage() {
    return (
        <div>
            {inputForm({
                placeholder: 'Enter your email',
                required: true,
                autoComplete: 'email',
                id: 'user_login_email',
                name: 'user_login_email',
                inputType: 'email'
            })}
            {inputForm({
                placeholder: 'Enter your password',
                required: true,
                autoComplete: 'current-password',
                id: 'user_login_password',
                name: 'user_login_password',
                inputType: 'password'
            })}
        </div>

    )
}

export {LoginPage}