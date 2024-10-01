import React from "react";

import {InputForm} from "../micro_componenets/Form";
import {DefaultButton, SocialLogin} from "../micro_componenets/Buttons";

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

                    <div className={`w-[90%]`}>
                        < SocialLogin imageSrc={`./src/assets/images/logos/google.svg`} name={`Google`}/>
                    </div>

                    <a href={`#`} className={`p-4 text-[#5C469C] text-[12px]`}>Already have an LogiNep account? Login</a>

                    <div className={`border-t-2 h-1 w-[80%]`}></div>

                    <div className={`flex flex-row p-4 text-[#5C469C] text-[12px]`}>
                        <p>I accepted all the</p>
                        <a href={`#`} className={`ml-1 font-semibold`}>Terms And Conditions</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export {LoginPage}