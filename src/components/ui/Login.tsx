import React from "react";

import {InputForm} from "../micro_componenets/Form";
import {DefaultButton} from "../micro_componenets/Buttons";

function LoginPage() {
    return (
        <div style={{
            backgroundImage: "url('./src/assets/images/login_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className={`h-[100vh]`}>
            <div className={`flex pt-6 items-center justify-center`}>
                <div className={`flex flex-col h-[500px] w-[25%] bg-white items-center pt-5 rounded-2xl shadow-xl`}>
                    <div className={`font-semibold text-[40px] text-[#5C469C]`}>
                        LogiNep
                    </div>
                    <div className={`p-3 font-semibold`}>
                        Login to Continue
                    </div>
                    <div className={`w-[90%]`}>
                        {InputForm({
                            placeholder: 'Enter your email',
                            required: true,
                            autoComplete: 'email',
                            id: 'user_login_email',
                            name: 'user_login_email',
                            inputType: 'email'
                        })}
                    </div>
                    <div className={`pt-3 w-[90%]`}>
                        {InputForm({
                            placeholder: 'Enter your password',
                            required: true,
                            autoComplete: 'current-password',
                            id: 'user_login_password',
                            name: 'user_login_password',
                            inputType: 'password'
                        })}
                    </div>

                    <div className={`pt-3 w-[90%]`}>
                        < DefaultButton buttonName={"Continue"}/>
                    </div>
                    <div className={`p-6 font-normal text-[#637188]`}>
                        or continue with:
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export {LoginPage}